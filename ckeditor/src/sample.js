/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import React, { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import CKBoxPlugin from "@ckeditor/ckeditor5-ckbox/src/ckbox";
import PictureEditing from "@ckeditor/ckeditor5-image/src/pictureediting";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import { Paragraph } from "ckeditor5/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";

import Comments from "@ckeditor/ckeditor5-comments/src/comments";
import TrackChanges from "@ckeditor/ckeditor5-track-changes/src/trackchanges";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";

import RealTimeCollaborativeTrackChanges from "@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativetrackchanges";
import RealTimeCollaborativeComments from "@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments";
import PresenceList from "@ckeditor/ckeditor5-real-time-collaboration/src/presencelist";

import * as CKBox from "ckbox";
import "ckbox/dist/styles/ckbox.css";

import { initialData } from "./sample-data";

const Sample = (props) => {
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const sidebarElementRef = useRef(null);
  const presenceListElementRef = useRef(null);

  useEffect(() => {
    window.CKBox = CKBox;
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
              console.log("Editor is ready to use!", editor);
              window.addEventListener("resize", refreshDisplayMode);
              window.addEventListener("beforeunload", checkPendingActions);
              refreshDisplayMode(editor);
            }}
            onChange={(event, editor) => console.log({ event, editor })}
            editor={ClassicEditor}
            config={{
              plugins: [
                Alignment,
                Autoformat,
                BlockQuote,
                Bold,
                CKBoxPlugin,
                PictureEditing,
                CloudServices,
                Comments,
                Essentials,
                FontFamily,
                FontSize,
                Heading,
                Highlight,
                Image,
                ImageCaption,
                ImageResize,
                ImageStyle,
                ImageToolbar,
                ImageUpload,
                Italic,
                Link,
                List,
                MediaEmbed,
                Paragraph,
                PasteFromOffice,
                PresenceList,
                RealTimeCollaborativeComments,
                RealTimeCollaborativeTrackChanges,
                RemoveFormat,
                Strikethrough,
                Table,
                TableToolbar,
                TrackChanges,
                Underline,
              ],
              toolbar: [
                "heading",
                "|",
                "fontsize",
                "fontfamily",
                "|",
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "removeFormat",
                "highlight",
                "|",
                "alignment",
                "|",
                "numberedList",
                "bulletedList",
                "|",
                "undo",
                "redo",
                "|",
                "comment",
                "commentsArchive",
                "trackChanges",
                "|",
                "ckbox",
                "imageUpload",
                "link",
                "blockquote",
                "insertTable",
                "mediaEmbed",
              ],
              cloudServices: {
                tokenUrl: cloudServicesConfig.tokenUrl,
                webSocketUrl: cloudServicesConfig.webSocketUrl,
              },
              collaboration: {
                channelId: cloudServicesConfig.channelId,
              },
              ckbox: {
                tokenUrl:
                  cloudServicesConfig.ckboxTokenUrl ||
                  cloudServicesConfig.tokenUrl,
              },
              image: {
                toolbar: [
                  "imageStyle:inline",
                  "imageStyle:block",
                  "imageStyle:side",
                  "|",
                  "toggleImageCaption",
                  "imageTextAlternative",
                  "|",
                  "comment",
                ],
              },
              table: {
                contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
                tableToolbar: ["comment"],
              },
              mediaEmbed: {
                toolbar: ["comment"],
              },
              sidebar: {
                container: sidebarElementRef.current,
              },
              presenceList: {
                container: presenceListElementRef.current,
              },
              comments: {
                editorConfig: {
                  extraPlugins: [Bold, Italic, Underline, List, Autoformat],
                },
              },
            }}
            data={initialData}
          />
        )}
        <div ref={sidebarElementRef} className="sidebar"></div>
      </div>
    );
  };

  const refreshDisplayMode = (editor) => {
    const annotationsUIs = editor.plugins.get("AnnotationsUIs");
    const sidebarElement = sidebarElementRef.current;

    if (window.innerWidth < 1070) {
      sidebarElement.classList.remove("narrow");
      sidebarElement.classList.add("hidden");
      annotationsUIs.switchTo("inline");
    } else if (window.innerWidth < 1300) {
      sidebarElement.classList.remove("hidden");
      sidebarElement.classList.add("narrow");
      annotationsUIs.switchTo("narrowSidebar");
    } else {
      sidebarElement.classList.remove("hidden", "narrow");
      annotationsUIs.switchTo("wideSidebar");
    }
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

export default Sample;
