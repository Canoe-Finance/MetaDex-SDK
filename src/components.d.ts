/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IChartData as IChartData1, IState } from "interface";
import { IChartData, IToken, ITransformTokenInfo } from "./interface";
export namespace Components {
    interface BaseChart {
        "mini": any[];
        "state": IState;
    }
    interface BottomButton {
        "disabled": boolean;
        "loading": boolean;
        "type": string;
    }
    interface CreditBox {
    }
    interface DealStatusBox {
        "receive": ITransformTokenInfo;
        "send": ITransformTokenInfo;
        "visible": boolean;
    }
    interface MetaChart {
        "data": IChartData[];
    }
    interface MetaHeader {
    }
    interface MetaMain {
        "data": IChartData[];
        "state": IState;
    }
    interface MetaMini {
        "mini": any[];
        "state": IState;
    }
    interface MetaPrice {
        "state": IState;
    }
    interface MetaRank {
        "state": IState;
    }
    interface MetaSwap {
        "token": string;
    }
    interface MyTab {
        "disabled": boolean;
        "tabList": any[];
    }
    interface SearchTokens {
        /**
          * Clears the form field (suggestions and selection)
         */
        "clear": () => Promise<void>;
        /**
          * If no value is selected, clear the input and emit unselected, if false, the value will not be cleared (usefull for suggesting values on a free text search)
         */
        "clearOnUnselectedClosing": boolean;
        /**
          * The class names, which should be set on the rendered html elements
         */
        "cssClasses": { wrapper: string; input: string; suggestions: string; suggestion: string; active: string; };
        /**
          * Enable/Disable the input field
         */
        "disabled": boolean;
        /**
          * Timing to suggest on empty (-1 to disable)
         */
        "emptySuggestionTime": number;
        /**
          * Returns the `text` of the selected item
         */
        "getText": () => Promise<string>;
        /**
          * Returns the `value` of the selected item
         */
        "getValue": () => Promise<string>;
        /**
          * id of the input field
         */
        "inputId": string;
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputmode"?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
        /**
          * The maximally shown suggestions in the list
         */
        "maxSuggestions": number;
        /**
          * The minimum input size for generating suggestions
         */
        "minInput": number;
        /**
          * The placeholder for the input field
         */
        "placeholder": string;
        /**
          * Form validation: is the form input required
         */
        "required": boolean;
        /**
          * Async suggestion generator: `text` is the displayed for users in the form after selection (if no `suggesion` also as suggesion) `value` is the actual value of the form field optional `suggesion` if the autocomplete suggestion item should be formatted differently than `text`
         */
        "suggestionGenerator": (text: string) => Promise<Array<{ text: string; value: string; suggestion?: string }>>;
        /**
          * The text is displayed by the form field for users
         */
        "text": string;
        /**
          * The actual value of the form field
         */
        "value": string;
    }
    interface SwapBox {
        "chainId": number;
        "fromAmount": number;
        "rpc": string;
        "slippage": number;
        "swapTokenType": string;
        "tokens": any[];
    }
    interface SwapInput {
        "token": IToken;
        "value": number;
    }
    interface TokenSwap {
    }
    interface TransferBox {
    }
}
declare global {
    interface HTMLBaseChartElement extends Components.BaseChart, HTMLStencilElement {
    }
    var HTMLBaseChartElement: {
        prototype: HTMLBaseChartElement;
        new (): HTMLBaseChartElement;
    };
    interface HTMLBottomButtonElement extends Components.BottomButton, HTMLStencilElement {
    }
    var HTMLBottomButtonElement: {
        prototype: HTMLBottomButtonElement;
        new (): HTMLBottomButtonElement;
    };
    interface HTMLCreditBoxElement extends Components.CreditBox, HTMLStencilElement {
    }
    var HTMLCreditBoxElement: {
        prototype: HTMLCreditBoxElement;
        new (): HTMLCreditBoxElement;
    };
    interface HTMLDealStatusBoxElement extends Components.DealStatusBox, HTMLStencilElement {
    }
    var HTMLDealStatusBoxElement: {
        prototype: HTMLDealStatusBoxElement;
        new (): HTMLDealStatusBoxElement;
    };
    interface HTMLMetaChartElement extends Components.MetaChart, HTMLStencilElement {
    }
    var HTMLMetaChartElement: {
        prototype: HTMLMetaChartElement;
        new (): HTMLMetaChartElement;
    };
    interface HTMLMetaHeaderElement extends Components.MetaHeader, HTMLStencilElement {
    }
    var HTMLMetaHeaderElement: {
        prototype: HTMLMetaHeaderElement;
        new (): HTMLMetaHeaderElement;
    };
    interface HTMLMetaMainElement extends Components.MetaMain, HTMLStencilElement {
    }
    var HTMLMetaMainElement: {
        prototype: HTMLMetaMainElement;
        new (): HTMLMetaMainElement;
    };
    interface HTMLMetaMiniElement extends Components.MetaMini, HTMLStencilElement {
    }
    var HTMLMetaMiniElement: {
        prototype: HTMLMetaMiniElement;
        new (): HTMLMetaMiniElement;
    };
    interface HTMLMetaPriceElement extends Components.MetaPrice, HTMLStencilElement {
    }
    var HTMLMetaPriceElement: {
        prototype: HTMLMetaPriceElement;
        new (): HTMLMetaPriceElement;
    };
    interface HTMLMetaRankElement extends Components.MetaRank, HTMLStencilElement {
    }
    var HTMLMetaRankElement: {
        prototype: HTMLMetaRankElement;
        new (): HTMLMetaRankElement;
    };
    interface HTMLMetaSwapElement extends Components.MetaSwap, HTMLStencilElement {
    }
    var HTMLMetaSwapElement: {
        prototype: HTMLMetaSwapElement;
        new (): HTMLMetaSwapElement;
    };
    interface HTMLMyTabElement extends Components.MyTab, HTMLStencilElement {
    }
    var HTMLMyTabElement: {
        prototype: HTMLMyTabElement;
        new (): HTMLMyTabElement;
    };
    interface HTMLSearchTokensElement extends Components.SearchTokens, HTMLStencilElement {
    }
    var HTMLSearchTokensElement: {
        prototype: HTMLSearchTokensElement;
        new (): HTMLSearchTokensElement;
    };
    interface HTMLSwapBoxElement extends Components.SwapBox, HTMLStencilElement {
    }
    var HTMLSwapBoxElement: {
        prototype: HTMLSwapBoxElement;
        new (): HTMLSwapBoxElement;
    };
    interface HTMLSwapInputElement extends Components.SwapInput, HTMLStencilElement {
    }
    var HTMLSwapInputElement: {
        prototype: HTMLSwapInputElement;
        new (): HTMLSwapInputElement;
    };
    interface HTMLTokenSwapElement extends Components.TokenSwap, HTMLStencilElement {
    }
    var HTMLTokenSwapElement: {
        prototype: HTMLTokenSwapElement;
        new (): HTMLTokenSwapElement;
    };
    interface HTMLTransferBoxElement extends Components.TransferBox, HTMLStencilElement {
    }
    var HTMLTransferBoxElement: {
        prototype: HTMLTransferBoxElement;
        new (): HTMLTransferBoxElement;
    };
    interface HTMLElementTagNameMap {
        "base-chart": HTMLBaseChartElement;
        "bottom-button": HTMLBottomButtonElement;
        "credit-box": HTMLCreditBoxElement;
        "deal-status-box": HTMLDealStatusBoxElement;
        "meta-chart": HTMLMetaChartElement;
        "meta-header": HTMLMetaHeaderElement;
        "meta-main": HTMLMetaMainElement;
        "meta-mini": HTMLMetaMiniElement;
        "meta-price": HTMLMetaPriceElement;
        "meta-rank": HTMLMetaRankElement;
        "meta-swap": HTMLMetaSwapElement;
        "my-tab": HTMLMyTabElement;
        "search-tokens": HTMLSearchTokensElement;
        "swap-box": HTMLSwapBoxElement;
        "swap-input": HTMLSwapInputElement;
        "token-swap": HTMLTokenSwapElement;
        "transfer-box": HTMLTransferBoxElement;
    }
}
declare namespace LocalJSX {
    interface BaseChart {
        "mini"?: any[];
        "state"?: IState;
    }
    interface BottomButton {
        "disabled"?: boolean;
        "loading"?: boolean;
        "type"?: string;
    }
    interface CreditBox {
    }
    interface DealStatusBox {
        "onClose"?: (event: CustomEvent<any>) => void;
        "receive"?: ITransformTokenInfo;
        "send"?: ITransformTokenInfo;
        "visible"?: boolean;
    }
    interface MetaChart {
        "data"?: IChartData[];
    }
    interface MetaHeader {
    }
    interface MetaMain {
        "data"?: IChartData[];
        "state"?: IState;
    }
    interface MetaMini {
        "mini"?: any[];
        "onOpenSwap"?: (event: CustomEvent<any>) => void;
        "state"?: IState;
    }
    interface MetaPrice {
        "state"?: IState;
    }
    interface MetaRank {
        "state"?: IState;
    }
    interface MetaSwap {
        "token"?: string;
    }
    interface MyTab {
        "disabled"?: boolean;
        "onClickMenu"?: (event: CustomEvent<any>) => void;
        "tabList"?: any[];
    }
    interface SearchTokens {
        /**
          * If no value is selected, clear the input and emit unselected, if false, the value will not be cleared (usefull for suggesting values on a free text search)
         */
        "clearOnUnselectedClosing"?: boolean;
        /**
          * The class names, which should be set on the rendered html elements
         */
        "cssClasses"?: { wrapper: string; input: string; suggestions: string; suggestion: string; active: string; };
        /**
          * Enable/Disable the input field
         */
        "disabled"?: boolean;
        /**
          * Timing to suggest on empty (-1 to disable)
         */
        "emptySuggestionTime"?: number;
        /**
          * id of the input field
         */
        "inputId"?: string;
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputmode"?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
        /**
          * The maximally shown suggestions in the list
         */
        "maxSuggestions"?: number;
        /**
          * The minimum input size for generating suggestions
         */
        "minInput"?: number;
        /**
          * Emitted when an item from suggestions was selected
         */
        "onSelected"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when item was cleared/unselected
         */
        "onUnselected"?: (event: CustomEvent<any>) => void;
        /**
          * The placeholder for the input field
         */
        "placeholder"?: string;
        /**
          * Form validation: is the form input required
         */
        "required"?: boolean;
        /**
          * Async suggestion generator: `text` is the displayed for users in the form after selection (if no `suggesion` also as suggesion) `value` is the actual value of the form field optional `suggesion` if the autocomplete suggestion item should be formatted differently than `text`
         */
        "suggestionGenerator"?: (text: string) => Promise<Array<{ text: string; value: string; suggestion?: string }>>;
        /**
          * The text is displayed by the form field for users
         */
        "text"?: string;
        /**
          * The actual value of the form field
         */
        "value"?: string;
    }
    interface SwapBox {
        "chainId"?: number;
        "fromAmount"?: number;
        "rpc"?: string;
        "slippage"?: number;
        "swapTokenType"?: string;
        "tokens"?: any[];
    }
    interface SwapInput {
        "onOpenSearch"?: (event: CustomEvent<any>) => void;
        "token"?: IToken;
        "value"?: number;
    }
    interface TokenSwap {
    }
    interface TransferBox {
    }
    interface IntrinsicElements {
        "base-chart": BaseChart;
        "bottom-button": BottomButton;
        "credit-box": CreditBox;
        "deal-status-box": DealStatusBox;
        "meta-chart": MetaChart;
        "meta-header": MetaHeader;
        "meta-main": MetaMain;
        "meta-mini": MetaMini;
        "meta-price": MetaPrice;
        "meta-rank": MetaRank;
        "meta-swap": MetaSwap;
        "my-tab": MyTab;
        "search-tokens": SearchTokens;
        "swap-box": SwapBox;
        "swap-input": SwapInput;
        "token-swap": TokenSwap;
        "transfer-box": TransferBox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "base-chart": LocalJSX.BaseChart & JSXBase.HTMLAttributes<HTMLBaseChartElement>;
            "bottom-button": LocalJSX.BottomButton & JSXBase.HTMLAttributes<HTMLBottomButtonElement>;
            "credit-box": LocalJSX.CreditBox & JSXBase.HTMLAttributes<HTMLCreditBoxElement>;
            "deal-status-box": LocalJSX.DealStatusBox & JSXBase.HTMLAttributes<HTMLDealStatusBoxElement>;
            "meta-chart": LocalJSX.MetaChart & JSXBase.HTMLAttributes<HTMLMetaChartElement>;
            "meta-header": LocalJSX.MetaHeader & JSXBase.HTMLAttributes<HTMLMetaHeaderElement>;
            "meta-main": LocalJSX.MetaMain & JSXBase.HTMLAttributes<HTMLMetaMainElement>;
            "meta-mini": LocalJSX.MetaMini & JSXBase.HTMLAttributes<HTMLMetaMiniElement>;
            "meta-price": LocalJSX.MetaPrice & JSXBase.HTMLAttributes<HTMLMetaPriceElement>;
            "meta-rank": LocalJSX.MetaRank & JSXBase.HTMLAttributes<HTMLMetaRankElement>;
            "meta-swap": LocalJSX.MetaSwap & JSXBase.HTMLAttributes<HTMLMetaSwapElement>;
            "my-tab": LocalJSX.MyTab & JSXBase.HTMLAttributes<HTMLMyTabElement>;
            "search-tokens": LocalJSX.SearchTokens & JSXBase.HTMLAttributes<HTMLSearchTokensElement>;
            "swap-box": LocalJSX.SwapBox & JSXBase.HTMLAttributes<HTMLSwapBoxElement>;
            "swap-input": LocalJSX.SwapInput & JSXBase.HTMLAttributes<HTMLSwapInputElement>;
            "token-swap": LocalJSX.TokenSwap & JSXBase.HTMLAttributes<HTMLTokenSwapElement>;
            "transfer-box": LocalJSX.TransferBox & JSXBase.HTMLAttributes<HTMLTransferBoxElement>;
        }
    }
}
