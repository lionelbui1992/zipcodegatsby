import React, { useEffect } from "react";
import markerSDK from '@marker.io/browser';
import "./test.sass";

export const Test = (): JSX.Element => {
    let widget: any;
    useEffect(() => {
        handleLoadingWidget();
    }, []);
    // DOM elements
    const loadSDKForm = document.querySelector('.js-load-sdk-form');
    const projectIdInput = document.querySelector('.js-project-id-input');
    const sdkLoaded = document.querySelector('.js-sdk-loaded');
    const widgetCaptureButton = document.querySelector('.js-widget-capture-btn');
    
    // Our widget SDK will be loaded in this variable
  
    // Handle SDK loading
    const handleLoadingWidget = async (event?: any) => {
      event?.preventDefault();
      if (null === projectIdInput) return;
      widget = await markerSDK.loadWidget({
        project: (projectIdInput as HTMLInputElement).value,

        customData: {
            storeId: "123",
            storeName: 'Green Fruits Store',
        },
    });

    null !== sdkLoaded && sdkLoaded.classList.remove('hide');
    null !== loadSDKForm && loadSDKForm.classList.add('hide');
  
      // Handle unloading properly
      widget.on('beforeunload', () => {
        widget = undefined;
  
        null !== sdkLoaded && sdkLoaded.classList.add('hide');
        null !== loadSDKForm && loadSDKForm.classList.remove('hide');
      });
    }

    const handleCapture = (event?:any) => {
        event?.preventDefault();
        widget.capture();
    }

    return (
        <div className="test-section">
            <form className="js-load-sdk-form" onSubmit={(e) => {e.preventDefault(); return false;}}>
                <fieldset className="fieldset">
                    <div className="field name">
                        <div className="control">
                            <input type="text" placeholder="Project ID" value="65d56a92da757a238de0c74b" className="js-project-id-input input-text" />
                        </div>
                    </div>
                    <div className="field name">
                        <button className="js-load-sdk button" onClick={handleLoadingWidget}>Load SDK</button>
                    </div>
                </fieldset>
            </form>
            <div className="column hide js-sdk-loaded">
                <div><strong>SDK loaded! 🚀</strong></div>
                <br />
                <div className="actions">
                    <button className="button js-widget-capture-btn" onClick={handleCapture}>Capture</button>
                </div>
            </div>
        </div>
    );
}
export default Test;