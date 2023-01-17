(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d9fbc"],{"6a50":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Constructor")]),t("h2",[e._v("Basic use")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-tag"},[e._v("<"),t("span",{staticClass:"hljs-name"},[e._v("div")]),e._v(" "),t("span",{staticClass:"hljs-attr"},[e._v("id")]),e._v("="),t("span",{staticClass:"hljs-string"},[e._v('"mindMapContainer"')]),e._v(">")]),t("span",{staticClass:"hljs-tag"},[e._v("</"),t("span",{staticClass:"hljs-name"},[e._v("div")]),e._v(">")]),e._v("\n")])]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" MindMap "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v('"simple-mind-map"')]),e._v(";\n\n"),t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" mindMap = "),t("span",{staticClass:"hljs-keyword"},[e._v("new")]),e._v(" MindMap({\n  "),t("span",{staticClass:"hljs-attr"},[e._v("el")]),e._v(": "),t("span",{staticClass:"hljs-built_in"},[e._v("document")]),e._v(".getElementById("),t("span",{staticClass:"hljs-string"},[e._v('"mindMapContainer"')]),e._v("),\n  "),t("span",{staticClass:"hljs-attr"},[e._v("data")]),e._v(": {\n    "),t("span",{staticClass:"hljs-string"},[e._v('"data"')]),e._v(": {\n        "),t("span",{staticClass:"hljs-string"},[e._v('"text"')]),e._v(": "),t("span",{staticClass:"hljs-string"},[e._v('"Root Node"')]),e._v("\n    },\n    "),t("span",{staticClass:"hljs-string"},[e._v('"children"')]),e._v(": []\n  }\n});\n")])]),t("h2",[e._v("Xmind Parsing Method")]),t("blockquote",[t("p",[e._v("v0.2.7+")])]),t("p",[e._v("You can get the "),t("code",[e._v("Xmind")]),e._v(" parsing method as follows:")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" MindMap "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v('"simple-mind-map"')]),e._v(";\n\n"),t("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".log(MindMap.xmind);\n")])]),t("p",[e._v("The "),t("code",[e._v("MindMap.xmind")]),e._v(" object has two methods attached:")]),t("h3",[e._v("parseXmindFile(file)")]),t("p",[e._v("Parsing the "),t("code",[e._v(".xmind")]),e._v(" file and returning the parsed data. Note that this is complete data, including the node tree, theme, and structure. You can use "),t("code",[e._v("mindMap.setFullData(data)")]),e._v(" to render the returned data to the canvas.")]),t("p",[t("code",[e._v("file")]),e._v(": "),t("code",[e._v("File")]),e._v(" object")]),t("h3",[e._v("transformXmind(content)")]),t("p",[e._v("Convert "),t("code",[e._v("xmind")]),e._v(" data. The "),t("code",[e._v(".xmind")]),e._v(" file is essentially a "),t("code",[e._v("zip")]),e._v(" file that can be decompressed by changing the suffix to zip. Inside, there is a "),t("code",[e._v("content.json")]),e._v(" file. If you have parsed this file yourself, you can pass the contents of this file to this method for conversion. The converted data is the complete data, including the node tree, theme, structure, etc. You can use "),t("code",[e._v("mindMap.setFullData(data)")]),e._v(" to render the returned data to the canvas.")]),t("p",[t("code",[e._v("content")]),e._v(": the contents of the "),t("code",[e._v("content.json")]),e._v(" file within the "),t("code",[e._v(".xmind")]),e._v(" zip package")]),t("h3",[e._v("transformOldXmind(content)")]),t("blockquote",[t("p",[e._v("v0.2.8+")])]),t("p",[e._v("For data parsing of the "),t("code",[e._v("xmind8")]),e._v(" version, because the "),t("code",[e._v(".xmind")]),e._v(" file in this version does not have a "),t("code",[e._v("content.json")]),e._v(", it corresponds to "),t("code",[e._v("content.xml")]),e._v(".")]),t("p",[t("code",[e._v("content")]),e._v(": the contents of the "),t("code",[e._v("content.xml")]),e._v(" file within the "),t("code",[e._v(".xmind")]),e._v(" zip package")]),t("h2",[e._v("Instantiation options")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Field Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default Value")]),t("th",[e._v("Description")]),t("th",[e._v("Required")])])]),t("tbody",[t("tr",[t("td",[e._v("el")]),t("td",[e._v("Element")]),t("td"),t("td",[e._v("Container element, must be a DOM element")]),t("td",[e._v("Yes")])]),t("tr",[t("td",[e._v("data")]),t("td",[e._v("Object")]),t("td",[e._v("{}")]),t("td",[e._v("Mind map data, refer to: https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js")]),t("td")]),t("tr",[t("td",[e._v("layout")]),t("td",[e._v("String")]),t("td",[e._v("logicalStructure")]),t("td",[e._v("Layout type, options: logicalStructure (logical structure diagram), mindMap (mind map), catalogOrganization (catalog organization diagram), organizationStructure (organization structure diagram)")]),t("td")]),t("tr",[t("td",[e._v("theme")]),t("td",[e._v("String")]),t("td",[e._v("default")]),t("td",[e._v("Theme, options: default, classic, minions, pinkGrape, mint, gold, vitalityOrange, greenLeaf, dark2, skyGreen, classic2, classic3, classic4 (v0.2.0+), classicGreen, classicBlue, blueSky, brainImpairedPink, dark, earthYellow, freshGreen, freshRed, romanticPurple")]),t("td")]),t("tr",[t("td",[e._v("themeConfig")]),t("td",[e._v("Object")]),t("td",[e._v("{}")]),t("td",[e._v("Theme configuration, will be merged with the selected theme, available fields refer to: https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/default.js")]),t("td")]),t("tr",[t("td",[e._v("scaleRatio")]),t("td",[e._v("Number")]),t("td",[e._v("0.1")]),t("td",[e._v("The incremental scaling ratio")]),t("td")]),t("tr",[t("td",[e._v("maxTag")]),t("td",[e._v("Number")]),t("td",[e._v("5")]),t("td",[e._v("The maximum number of tags displayed in the node, any additional tags will be discarded")]),t("td")]),t("tr",[t("td",[e._v("exportPadding")]),t("td",[e._v("Number")]),t("td",[e._v("20")]),t("td",[e._v("The padding for exporting images")]),t("td")]),t("tr",[t("td",[e._v("imgTextMargin")]),t("td",[e._v("Number")]),t("td",[e._v("5")]),t("td",[e._v("The spacing between the image and text in the node")]),t("td")]),t("tr",[t("td",[e._v("textContentMargin")]),t("td",[e._v("Number")]),t("td",[e._v("2")]),t("td",[e._v("The spacing between various text information in the node, such as the spacing between the icon and text")]),t("td")]),t("tr",[t("td",[e._v("selectTranslateStep")]),t("td",[e._v("Number")]),t("td",[e._v("3")]),t("td",[e._v("The canvas offset when mouse moves to the edge during multi-select node")]),t("td")]),t("tr",[t("td",[e._v("selectTranslateLimit")]),t("td",[e._v("Number")]),t("td",[e._v("20")]),t("td",[e._v("The distance from the edge when the canvas begins to offset during multi-select node")]),t("td")]),t("tr",[t("td",[e._v("customNoteContentShow（v0.1.6+）")]),t("td",[e._v("Object")]),t("td",[e._v("null")]),t("td",[e._v("Custom node note content display, object type, structure: {show: (noteContent, left, top) => {// your display node note logic }, hide: () => {// your hide node note logic }}")]),t("td")]),t("tr",[t("td",[e._v("readonly（v0.1.7+）")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("Whether it is read-only mode")]),t("td")]),t("tr",[t("td",[e._v("enableFreeDrag（v0.2.4+）")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("Enable node free drag")]),t("td")]),t("tr",[t("td",[e._v("watermarkConfig（v0.2.4+）")]),t("td",[e._v("Object")]),t("td"),t("td",[e._v("Watermark config, Please refer to the table 【Watermark config】 below for detailed configuration")]),t("td")])])]),t("h3",[e._v("Watermark config")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Field Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default Value")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("text")]),t("td",[e._v("String")]),t("td",[e._v("''")]),t("td",[e._v("Watermark text. If it is an empty string, the watermark will not be displayed")])]),t("tr",[t("td",[e._v("lineSpacing")]),t("td",[e._v("Number")]),t("td",[e._v("100")]),t("td",[e._v("Spacing between watermark lines")])]),t("tr",[t("td",[e._v("textSpacing")]),t("td",[e._v("Number")]),t("td",[e._v("100")]),t("td",[e._v("Spacing between watermarks in the same row")])]),t("tr",[t("td",[e._v("angle")]),t("td",[e._v("Number")]),t("td",[e._v("30")]),t("td",[e._v("Tilt angle of watermark, range: [0, 90]")])]),t("tr",[t("td",[e._v("textStyle")]),t("td",[e._v("Object")]),t("td",[e._v("{color: '#999', opacity: 0.5, fontSize: 14}")]),t("td",[e._v("Watermark text style")])])])]),t("h2",[e._v("Static methods")]),t("h3",[e._v("defineTheme(name, config)")]),t("blockquote",[t("p",[e._v("v0.2.23+")])]),t("p",[e._v("Define new theme.")]),t("p",[t("code",[e._v("name")]),e._v("：New theme name")]),t("p",[t("code",[e._v("config")]),e._v("：New theme config")]),t("p",[t("code",[e._v("Simple-mind-map ")]),e._v(" Built-in many themes. In addition, you can register new theme. It is recommended to register before instantiation, so that you can directly use the newly registered theme during instantiation. Use example:")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" MindMap "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map'")]),e._v("\n"),t("span",{staticClass:"hljs-comment"},[e._v("// 注册新主题")]),e._v("\nMindMap.defineTheme("),t("span",{staticClass:"hljs-string"},[e._v("'Theme name'")]),e._v(", {})\n\n"),t("span",{staticClass:"hljs-comment"},[e._v("// 1.实例化时使用新注册的主题")]),e._v("\n"),t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" mindMap = "),t("span",{staticClass:"hljs-keyword"},[e._v("new")]),e._v(" MindMap({\n    "),t("span",{staticClass:"hljs-attr"},[e._v("theme")]),e._v(": "),t("span",{staticClass:"hljs-string"},[e._v("'Theme name'")]),e._v("\n})\n\n"),t("span",{staticClass:"hljs-comment"},[e._v("// 2.动态切换新主题")]),e._v("\nmindMap.setTheme("),t("span",{staticClass:"hljs-string"},[e._v("'Theme name'")]),e._v(")\n")])]),t("p",[e._v("For all configurations of theme, please refer to "),t("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/default.js"}},[e._v("Default Topic")]),e._v(". The "),t("code",[e._v("defineTheme")]),e._v("method will merge the configuration you passed in with the default configuration. Most of the themes do not need custom many parts. For a typical customized theme configuration, please refer to "),t("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/blueSky.js"}},[e._v("blueSky")]),e._v(".")]),t("h2",[e._v("Instance methods")]),t("h3",[e._v("render()")]),t("p",[e._v("Triggers a full rendering, which will reuse nodes for better performance. If only the node positions have changed, this method can be called to "),t("code",[e._v("reRender")]),e._v(".")]),t("h3",[e._v("reRender()")]),t("p",[e._v("Performs a full re-render, clearing the canvas and creating new nodes. This has poor performance and should be used sparingly.")]),t("h3",[e._v("resize()")]),t("p",[e._v("After the container size has changed, this method should be called to adjust.")]),t("h3",[e._v("setMode(mode)")]),t("blockquote",[t("p",[e._v("v0.1.7+")])]),t("p",[e._v("Switches between readonly and edit mode.")]),t("p",[t("code",[e._v("mode")]),e._v("：readonly、edit")]),t("h3",[e._v("on(event, fn)")]),t("p",[e._v("Listen to an event. Event list:")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Event Name")]),t("th",[e._v("Description")]),t("th",[e._v("Callback Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("data_change")]),t("td",[e._v("Tree rendering data change, listen to this method to get the latest data")]),t("td",[e._v("data (current tree rendering data)")])]),t("tr",[t("td",[e._v("view_data_change（v0.1.1+）")]),t("td",[e._v("View change data, such as when dragging or zooming")]),t("td",[e._v("data (current view state data)")])]),t("tr",[t("td",[e._v("back_forward")]),t("td",[e._v("Forward or backward")]),t("td",[e._v("activeHistoryIndex (current index in the history data array), length (current length of the history data array)")])]),t("tr",[t("td",[e._v("draw_click")]),t("td",[e._v("Canvas click event")]),t("td",[e._v("e (event object)")])]),t("tr",[t("td",[e._v("svg_mousedown")]),t("td",[e._v("svg canvas mouse down event")]),t("td",[e._v("e (event object)")])]),t("tr",[t("td",[e._v("mousedown")]),t("td",[e._v("el element mouse down event")]),t("td",[e._v("e (event object), this (Event event class instance)")])]),t("tr",[t("td",[e._v("mousemove")]),t("td",[e._v("el element mouse move event")]),t("td",[e._v("e (event object), this (Event event class instance)")])]),t("tr",[t("td",[e._v("drag")]),t("td",[e._v("If it is a drag event while holding down the left button")]),t("td",[e._v("e (event object), this (Event event class instance)")])]),t("tr",[t("td",[e._v("mouseup")]),t("td",[e._v("el element mouse up event")]),t("td",[e._v("e (event object), this (Event event class instance)")])]),t("tr",[t("td",[e._v("mousewheel")]),t("td",[e._v("Mouse scroll event")]),t("td",[e._v("e (event object), dir (up or down scroll), this (Event event class instance)")])]),t("tr",[t("td",[e._v("contextmenu")]),t("td",[e._v("svg canvas right mouse button menu event")]),t("td",[e._v("e (event object)")])]),t("tr",[t("td",[e._v("node_click")]),t("td",[e._v("Node click event")]),t("td",[e._v("this (node instance), e (event object)")])]),t("tr",[t("td",[e._v("node_mousedown")]),t("td",[e._v("Node mouse down event")]),t("td",[e._v("this (node instance), e (event object)")])]),t("tr",[t("td",[e._v("node_mouseup")]),t("td",[e._v("node mouseup event")]),t("td",[e._v("this (node instance), e (event object)")])]),t("tr",[t("td",[e._v("node_mouseup")]),t("td",[e._v("Node mouseup event")]),t("td",[e._v("this (node instance), e (event object)")])]),t("tr",[t("td",[e._v("node_dblclick")]),t("td",[e._v("Node double-click event")]),t("td",[e._v("this (node instance), e (event object)")])]),t("tr",[t("td",[e._v("node_contextmenu")]),t("td",[e._v("Node right-click menu event")]),t("td",[e._v("e (event object), this (node instance)")])]),t("tr",[t("td",[e._v("before_node_active")]),t("td",[e._v("Event before node activation")]),t("td",[e._v("this (node instance), activeNodeList (current list of active nodes)")])]),t("tr",[t("td",[e._v("node_active")]),t("td",[e._v("Node activation event")]),t("td",[e._v("this (node instance), activeNodeList (current list of active nodes)")])]),t("tr",[t("td",[e._v("expand_btn_click")]),t("td",[e._v("Node expand or collapse event")]),t("td",[e._v("this (node instance)")])]),t("tr",[t("td",[e._v("before_show_text_edit")]),t("td",[e._v("Event before node text edit box opens")]),t("td")]),t("tr",[t("td",[e._v("hide_text_edit")]),t("td",[e._v("Node text edit box close event")]),t("td",[e._v("textEditNode (text edit box DOM node), activeNodeList (current list of active nodes)")])]),t("tr",[t("td",[e._v("scale")]),t("td",[e._v("Zoom event")]),t("td",[e._v("scale (zoom ratio)")])]),t("tr",[t("td",[e._v("node_img_dblclick（v0.2.15+）")]),t("td",[e._v("Node image double-click event")]),t("td",[e._v("this (node instance), e (event object)")])]),t("tr",[t("td",[e._v("node_tree_render_end（v0.2.16+）")]),t("td",[e._v("Node tree render end event")]),t("td")])])]),t("h3",[e._v("emit(event, ...args)")]),t("p",[e._v("Trigger an event, which can be one of the events listed above or a custom event.")]),t("h3",[e._v("off(event, fn)")]),t("p",[e._v("Unbind an event.")]),t("h3",[e._v("setTheme(theme)")]),t("p",[e._v("Switches the theme. Available themes can be found in the options table above.")]),t("h3",[e._v("getTheme()")]),t("p",[e._v("Gets the current theme.")]),t("h3",[e._v("setThemeConfig(config)")]),t("p",[e._v("Sets the theme configuration. "),t("code",[e._v("config")]),e._v(" is the same as the "),t("code",[e._v("themeConfig")]),e._v(" option in the options table above.")]),t("h3",[e._v("getCustomThemeConfig()")]),t("p",[e._v("Gets the custom theme configuration.")]),t("h3",[e._v("getThemeConfig(prop)")]),t("p",[e._v("Gets the value of a specific theme configuration property.")]),t("h3",[e._v("getConfig("),t("em",[e._v("prop")]),e._v(")")]),t("blockquote",[t("p",[e._v("0.2.24+")])]),t("p",[t("code",[e._v("prop")]),e._v("：Get the value of the specified configuration, and return the entire configuration if not passed")]),t("p",[e._v("Get config, That is, "),t("code",[e._v("opt")]),e._v(" of "),t("code",[e._v("new MindMap (opt)")])]),t("h3",[e._v("updateConfig("),t("em",[e._v("opt")]),e._v(" = {})")]),t("blockquote",[t("p",[e._v("0.2.24+")])]),t("p",[t("code",[e._v("opt")]),e._v("：Configuration to update")]),t("p",[e._v("Update config，That is update "),t("code",[e._v("opt")]),e._v(" of "),t("code",[e._v("new MindMap(opt)")]),e._v("，You can only update some data, such as:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("mindMap.updateConfig({\n    "),t("span",{staticClass:"hljs-attr"},[e._v("enableFreeDrag")]),e._v(": "),t("span",{staticClass:"hljs-literal"},[e._v("true")]),t("span",{staticClass:"hljs-comment"},[e._v("// 开启节点自由拖拽")]),e._v("\n})\n")])]),t("p",[e._v("This method only updates the configuration and has no other side effects, such as triggering canvas re-rendering")]),t("h3",[e._v("getLayout()")]),t("p",[e._v("Gets the current layout structure.")]),t("h3",[e._v("setLayout(layout)")]),t("p",[e._v("Sets the layout structure. Available values can be found in the "),t("code",[e._v("layout")]),e._v(" field in the options table above.")]),t("h3",[e._v("execCommand(name, ...args)")]),t("p",[e._v("Executes a command, which will add a record to the history stack for undo or redo. All commands are as follows:")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Command name")]),t("th",[e._v("Description")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("SELECT_ALL")]),t("td",[e._v("Select all")]),t("td")]),t("tr",[t("td",[e._v("BACK")]),t("td",[e._v("Go back a specified number of steps")]),t("td",[e._v("step (the number of steps to go back, default is 1)")])]),t("tr",[t("td",[e._v("FORWARD")]),t("td",[e._v("Go forward a specified number of steps")]),t("td",[e._v("step (the number of steps to go forward, default is 1)")])]),t("tr",[t("td",[e._v("INSERT_NODE")]),t("td",[e._v("Insert a sibling node, the active node will be the operation node. If there are multiple active nodes, only the first one will be effective")]),t("td")]),t("tr",[t("td",[e._v("INSERT_CHILD_NODE")]),t("td",[e._v("Insert a child node, the active node will be the operation node")]),t("td")]),t("tr",[t("td",[e._v("UP_NODE")]),t("td",[e._v("Move node up, the active node will be the operation node. If there are multiple active nodes, only the first one will be effective. Using this command on the root node or the first node in the list will be invalid")]),t("td")]),t("tr",[t("td",[e._v("DOWN_NODE")]),t("td",[e._v("Move node down, the active node will be the operation node. If there are multiple active nodes, only the first one will be effective. Using this command on the root node or the last node in the list will be invalid")]),t("td")]),t("tr",[t("td",[e._v("REMOVE_NODE")]),t("td",[e._v("Remove node, the active node will be the operation node")]),t("td")]),t("tr",[t("td",[e._v("PASTE_NODE")]),t("td",[e._v("Paste node to a node, the active node will be the operation node")]),t("td",[e._v("data (the node data to paste, usually obtained through the renderer.copyNode() and renderer.cutNode() methods)")])]),t("tr",[t("td",[e._v("SET_NODE_STYLE")]),t("td",[e._v("Modify node style")]),t("td",[e._v("node (the node to set the style of), prop (style property), value (style property value), isActive (boolean, whether the style being set is for the active state)")])]),t("tr",[t("td",[e._v("SET_NODE_ACTIVE")]),t("td",[e._v("Set whether the node is active")]),t("td",[e._v("node (the node to set), active (boolean, whether to activate)")])]),t("tr",[t("td",[e._v("CLEAR_ACTIVE_NODE")]),t("td",[e._v("Clear the active state of the currently active node(s), the active node will be the operation node")]),t("td")]),t("tr",[t("td",[e._v("SET_NODE_EXPAND")]),t("td",[e._v("Set whether the node is expanded")]),t("td",[e._v("node (the node to set), expand (boolean, whether to expand)")])]),t("tr",[t("td",[e._v("EXPAND_ALL")]),t("td",[e._v("Expand all nodes")]),t("td")]),t("tr",[t("td",[e._v("UNEXPAND_ALL")]),t("td",[e._v("Collapse all nodes")]),t("td")]),t("tr",[t("td",[e._v("UNEXPAND_TO_LEVEL (v0.2.8+)")]),t("td",[e._v("Expand to a specified level")]),t("td",[e._v("level (the level to expand to, 1, 2, 3...)")])]),t("tr",[t("td",[e._v("SET_NODE_DATA")]),t("td",[e._v("Update node data, that is, update the data in the data object of the node data object")]),t("td",[e._v("node (the node to set), data (object, the data to update, e.g. "),t("code",[e._v("{expand: true}")]),e._v(")")])]),t("tr",[t("td",[e._v("SET_NODE_TEXT")]),t("td",[e._v("Set node text")]),t("td",[e._v("node (the node to set), text (the new text for the node)")])]),t("tr",[t("td",[e._v("SET_NODE_IMAGE")]),t("td",[e._v("Set Node Image")]),t("td",[e._v("node (node to set), imgData (object, image information, structured as: "),t("code",[e._v("{url, title, width, height}")]),e._v(", the width and height of the image must be passed)")])]),t("tr",[t("td",[e._v("SET_NODE_ICON")]),t("td",[e._v("Set Node Icon")]),t("td",[e._v("node (node to set), icons (array, predefined image names array, available icons can be obtained in the nodeIconList list in the "),t("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/svg/icons.js"}},[e._v("https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/svg/icons.js")]),e._v(" file, icon name is type_name, such as ['priority_1'])")])]),t("tr",[t("td",[e._v("SET_NODE_HYPERLINK")]),t("td",[e._v("Set Node Hyperlink")]),t("td",[e._v("node (node to set), link (hyperlink address), title (hyperlink name, optional)")])]),t("tr",[t("td",[e._v("SET_NODE_NOTE")]),t("td",[e._v("Set Node Note")]),t("td",[e._v("node (node to set), note (note text)")])]),t("tr",[t("td",[e._v("SET_NODE_TAG")]),t("td",[e._v("Set Node Tag")]),t("td",[e._v("node (node to set), tag (string array, built-in color information can be obtained in "),t("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/utils/constant.js"}},[e._v("https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/utils/constant.js")]),e._v(")")])]),t("tr",[t("td",[e._v("INSERT_AFTER (v0.1.5+)")]),t("td",[e._v("Move Node to After Another Node")]),t("td",[e._v("node (node to move), exist (target node)")])]),t("tr",[t("td",[e._v("INSERT_BEFORE (v0.1.5+)")]),t("td",[e._v("Move Node to Before Another Node")]),t("td",[e._v("node (node to move), exist (target node)")])]),t("tr",[t("td",[e._v("MOVE_NODE_TO (v0.1.5+)")]),t("td",[e._v("Move a node as a child of another node")]),t("td",[e._v("node (the node to move), toNode (the target node)")])]),t("tr",[t("td",[e._v("ADD_GENERALIZATION (v0.2.0+)")]),t("td",[e._v("Add a node summary")]),t("td",[e._v("data (the data for the summary, in object format, all numerical fields of the node are supported, default is "),t("code",[e._v("{text: 'summary'}")]),e._v(")")])]),t("tr",[t("td",[e._v("REMOVE_GENERALIZATION (v0.2.0+)")]),t("td",[e._v("Remove a node summary")]),t("td")]),t("tr",[t("td",[e._v("SET_NODE_CUSTOM_POSITION (v0.2.0+)")]),t("td",[e._v("Set a custom position for a node")]),t("td",[e._v("node (the node to set), left (custom x coordinate, default is undefined), top (custom y coordinate, default is undefined)")])]),t("tr",[t("td",[e._v("RESET_LAYOUT (v0.2.0+)")]),t("td",[e._v("Arrange layout with one click")]),t("td")]),t("tr",[t("td",[e._v("SET_NODE_SHAPE (v0.2.4+)")]),t("td",[e._v("Set the shape of a node")]),t("td",[e._v("node (the node to set), shape (the shape, all shapes: https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/Shape.js)")])])])]),t("h3",[e._v("setData(data)")]),t("p",[e._v("Dynamic setting of mind map data, pure node data")]),t("p",[t("code",[e._v("data")]),e._v(": mind map structure data")]),t("h3",[e._v("setFullData("),t("em",[e._v("data")]),e._v(")")]),t("blockquote",[t("p",[e._v("v0.2.7+")])]),t("p",[e._v("Dynamic setting of mind map data, including node data, layout, theme, view")]),t("p",[t("code",[e._v("data")]),e._v(": complete data, structure can refer to "),t("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exportFullData.json"}},[e._v("exportFullData")])]),t("h3",[e._v("getData(withConfig)")]),t("blockquote",[t("p",[e._v("v0.2.9+")])]),t("p",[e._v("Gets mind map data")]),t("p",[t("code",[e._v("withConfig")]),e._v(": "),t("code",[e._v("Boolean")]),e._v(", default is "),t("code",[e._v("false")]),e._v(", that is, the obtained data only includes the node tree, if "),t("code",[e._v("true")]),e._v(" is passed, it will also include theme, layout, view, etc. data")]),t("h3",[e._v("export(type, isDownload, fileName)")]),t("p",[e._v("Export")]),t("p",[t("code",[e._v("type")]),e._v(": the type to be exported, optional values: png, svg, json, pdf (v0.2.1+), smm (essentially also json)")]),t("p",[t("code",[e._v("isDownload")]),e._v(": whether to directly trigger download, Boolean value, default is "),t("code",[e._v("false")])]),t("p",[t("code",[e._v("fileName")]),e._v(": (v0.1.6+) the name of the exported file, default is "),t("code",[e._v("思维导图")]),e._v(" (mind map).")]),t("h3",[e._v("toPos(x, y)")]),t("blockquote",[t("p",[e._v("v0.1.5+")])]),t("p",[e._v("Convert the coordinates of the browser's visible window to coordinates relative to the canvas.")])])}],d={},s=d,i=n("2877"),v=Object(i["a"])(s,a,o,!1,null,null,null);t["default"]=v.exports}}]);