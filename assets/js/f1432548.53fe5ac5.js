"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2871],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(v,o(o({ref:r},u),{},{components:t})):n.createElement(v,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1334:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={sidebar_label:"variant_generator",title:"searcher.variant_generator"},s=void 0,l={unversionedId:"reference/searcher/variant_generator",id:"reference/searcher/variant_generator",isDocsHomePage:!1,title:"searcher.variant_generator",description:"TuneError Objects",source:"@site/docs/reference/searcher/variant_generator.md",sourceDirName:"reference/searcher",slug:"/reference/searcher/variant_generator",permalink:"/FLAML/docs/reference/searcher/variant_generator",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/searcher/variant_generator.md",tags:[],version:"current",frontMatter:{sidebar_label:"variant_generator",title:"searcher.variant_generator"},sidebar:"referenceSideBar",previous:{title:"suggestion",permalink:"/FLAML/docs/reference/searcher/suggestion"},next:{title:"analysis",permalink:"/FLAML/docs/reference/tune/analysis"}},u=[{value:"TuneError Objects",id:"tuneerror-objects",children:[{value:"generate_variants",id:"generate_variants",children:[],level:4},{value:"grid_search",id:"grid_search",children:[],level:4}],level:2}],p={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tuneerror-objects"},"TuneError Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class TuneError(Exception)\n")),(0,i.kt)("p",null,"General error class raised by ray.tune."),(0,i.kt)("h4",{id:"generate_variants"},"generate","_","variants"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def generate_variants(unresolved_spec: Dict) -> Generator[Tuple[Dict, Dict], None, None]\n")),(0,i.kt)("p",null,'Generates variants from a spec (dict) with unresolved values.\nThere are two types of unresolved values:\nGrid search: These define a grid search over values. For example, the\nfollowing grid search values in a spec will produce six distinct\nvariants in combination:\n"activation": grid_search(','["relu", "tanh"]',')\n"learning_rate": grid_search(',"[1e-3, 1e-4, 1e-5]",')\nFinally, to support defining specs in plain JSON / YAML, grid search\ncan also be defined alternatively as follows:\n"activation": {"grid_search": ','["relu", "tanh"]',"}\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"format_vars")," to format the returned dict of hyperparameters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Yields"),":"),(0,i.kt)("p",null,"  (Dict of resolved variables, Spec object)"),(0,i.kt)("h4",{id:"grid_search"},"grid","_","search"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def grid_search(values: List) -> Dict[str, List]\n")),(0,i.kt)("p",null,"Convenience method for specifying grid search over a value."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values")," - An iterable whose parameters will be gridded.")))}d.isMDXComponent=!0}}]);