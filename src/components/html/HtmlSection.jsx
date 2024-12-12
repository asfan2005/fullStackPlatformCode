import React from "react";
import {
  HtmlFrames,
  HtmlElements,
  HtmlAttributes,
  HtmlBasic,
  HtmlForms,
  HtmlImages,
  HtmlInputTypes,
  HtmlLinks,
  HtmlLists,
  HtmlSemantics,
  HtmlTables,
  HtmlAudioVideo,
  HtmlBlogInline,
  HtmlEnties,
  HtmlMeteTegs,
  HtmlResponsiveDesign,
  HtmlVide,
} from "../index"; // Adjust the import path as needed

function HtmlSection({ currentPage }) {
  const renderContent = () => {
    switch (currentPage) {
      case "html-basics":
        return <HtmlBasic />;
      case "html-elements":
        return <HtmlElements />;
      case "html-semantics":
        return <HtmlSemantics />;
      case "html-attributes":
        return <HtmlAttributes />;
      case "html-links":
        return <HtmlLinks />;
      case "html-images":
        return <HtmlImages />;
      case "html-lists":
        return <HtmlLists />;
      case "html-tables":
        return <HtmlTables />;
      case "html-forms":
        return <HtmlForms />;
      case "html-input-types":
        return <HtmlInputTypes />;
      case "html-iframes":
        return <HtmlFrames />;
      case "html-audio-video":
        return <HtmlAudioVideo />;
      case "html-block-inline":
        return <HtmlBlogInline />;
      case "html-entities":
        return <HtmlEnties />;
      case "html-meta-tags":
        return <HtmlMeteTegs />;
      case "html-responsive-design":
        return <HtmlResponsiveDesign />;
      case "html5-apis":
        return <div>Content for HTML5 APIs</div>;
      case "html-canvas":
        return <div>Content for HTML Canvas</div>;
      case "html-svg":
        return <div>Content for HTML SVG</div>;
      case "html-forms-validation":
        return <div>Content for HTML Forms Validation</div>;
      case "html-accessibility":
        return <div>Content for HTML Accessibility</div>;
      case "html-video":
        return <HtmlVide />;
      default:
        return <div>Select a menu item to see content</div>;
    }
  };

  return <div className="p-4">{renderContent()}</div>;
}

export default HtmlSection;
