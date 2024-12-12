import React from "react";
import {
  CssBasics,
  CssSelectors,
  CssBoxModel,
  CssFlexboxContent,
  CssGridContent,
  CssPositionContent,
  CssColors,
  CssTypography,
  CssTransitions,
  CssAnimations,
  CssMediaQueries,
  CssPseudoClasses,
  CssPseudoElements,
  CssVariables,
  CssFramwork,
  CssResponsiveDesign,
  CssBackgrounds,
  CssBorders,
  CssShadows,
  CssGradients,
  CssTransForms,
  CssFilters,
  CssUnits,
  CssInteractivity,
  CssMobileDesign,
  CssVisibility,
} from "../../pages/CssPages/index";
import "../../pages/CssPages/CssStyle.css";
function CssSection({ currentPage }) {
  const renderContent = () => {
    switch (currentPage) {
      case "css-basics":
        return <CssBasics />;
      case "css-selectors":
        return <CssSelectors />;
      case "css-box-model":
        return <CssBoxModel />;
      case "css-flexbox":
        return <CssFlexboxContent />;
      case "css-grid":
        return <CssGridContent />;
      case "css-positioning":
        return <CssPositionContent />;
      case "css-colors":
        return <CssColors />;
      case "css-typography":
        return <CssTypography />;
      case "css-transitions":
        return <CssTransitions />;
      case "css-animations":
        return <CssAnimations />;
      case "css-media-queries":
        return <CssMediaQueries />;
      case "css-pseudo-classes":
        return <CssPseudoClasses />;
      case "css-pseudo-elements":
        return <CssPseudoElements />;
      case "css-variables":
        return <CssVariables />;
      case "css-frameworks":
        return <CssFramwork />;
      case "css-responsive-design":
        return <CssResponsiveDesign />;
      case "css-backgrounds":
        return <CssBackgrounds />;
      case "css-borders":
        return <CssBorders />;
      case "css-shadows":
        return <CssShadows />;
      case "css-gradients":
        return <CssGradients />;
      case "css-transforms":
        return <CssTransForms />;
      case "css-filters":
        return <CssFilters />;
      case "css-units":
        return <CssUnits />;
      case "css-interactivity":
        return <CssInteractivity />;
      case "css-mobile-design":
        return <CssMobileDesign />;
      case "css-visibility":
        return <CssVisibility />;
      default:
        return "Select a menu item to see content";
    }
  };

  return (
    <div id="app-containeri" className="p-4 h-100vh overflow-y-auto">
      {renderContent()}
    </div>
  );
}

export default CssSection;
