/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import React, { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Comments } from "@ckeditor/ckeditor5-comments";
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services";
import {
  RealTimeCollaborativeComments,
  PresenceList,
} from "@ckeditor/ckeditor5-real-time-collaboration";
// import format from 'date-fns/format';
// import ja from 'date-fns/locale/ja'

import { initialData } from "./sample-data";

const Editor = (props) => {
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const sidebarElementRef = useRef(null);
  const presenceListElementRef = useRef(null);

  useEffect(() => {
    setIsLayoutReady(true);
    return () => {
      window.removeEventListener("resize", refreshDisplayMode);
      window.removeEventListener("beforeunload", checkPendingActions);
    };
  }, []);

  const renderEditor = (props) => {
    const cloudServicesConfig = props.configuration;

    return (
      <div className="row row-editor">
        {isLayoutReady && (
          <CKEditor
            onReady={(editor) => {
              window.addEventListener("resize", refreshDisplayMode);
              window.addEventListener("beforeunload", checkPendingActions);
              refreshDisplayMode(editor);
            }}
            onChange={(event, editor) => console.log({ event, editor })}
            editor={ClassicEditor}
            data={initialData}
            config={{
              plugins: [
                CloudServices,
                Comments,
                Essentials,
                Highlight,
                Paragraph,
                PresenceList,
                RealTimeCollaborativeComments,
              ],
              toolbar: [
                "comment",
                "commentsArchive",
              ],
              cloudServices: {
                tokenUrl: cloudServicesConfig.tokenUrl,
                webSocketUrl: cloudServicesConfig.webSocketUrl,
              },
              collaboration: {
                channelId: cloudServicesConfig.channelId,
              },
              sidebar: {
                container: sidebarElementRef.current,
              },
              presenceList: {
                container: presenceListElementRef.current,
              },
              comments: {
                editorConfig: {
                  extraPlugins: [],
                  // dateTimeFormat: date => format( date, 'yyyy/MM/dd', {locale: ja} ),
                },
              },
            }}
          />
        )}
        <div ref={sidebarElementRef} className="sidebar"></div>
      </div>
    );
  };

  const refreshDisplayMode = (editor) => {
    const annotationsUIs = editor.plugins.get("AnnotationsUIs");
    const sidebarElement = sidebarElementRef.current;
    sidebarElement.classList.remove("hidden", "narrow");
    annotationsUIs.switchTo("wideSidebar");
  };

  const checkPendingActions = (editor, domEvt) => {
    if (editor.plugins.get("PendingActions").hasAny) {
      domEvt.preventDefault();
      domEvt.returnValue = true;
    }
  };

  return (
    <div className="App">
      <main>
        <div className="centered">
          <div className="row-presence">
            <div ref={presenceListElementRef} className="presence"></div>
          </div>
          {renderEditor(props)}
        </div>
      </main>
    </div>
  );
};

export default Editor;
