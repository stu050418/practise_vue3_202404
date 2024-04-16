module.exports = {
	/* 基礎常用配置 */
	semi: true, 				// 在语句末尾使用分号(true有，false没有)
	singleQuote: true, // 使用单引号代替双引号(true单双引号，false双引号)
	tabWidth: 2, // 指定每个缩进级别的空格数
	// ↓可选值"<none|es5|all>"，默认none // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
	trailingComma: "es5", // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。）
	
	/* 基礎常用配置-微進階 */
	useTabs: true, // 使用制表符而不是空格缩进行
	singleQuote: false, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  jsxSingleQuote: false, // 在JSX中使用单引号而不是双引号
	bracketSpacing: true,  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  // JSX标签闭合位置 默认false
  // false: <div
  //          className=""
  //          style={{}}
  //       >
  // true: <div
  //          className=""
  //          style={{}} >
  jsxBracketSameLine: false,
	arrowParens: "avoid", 	//  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号
	
  
	/*  prettier的配置 */
	// printWidth: 120,							// 超过最大值换行
	// quoteProps: "as-needed", 		// 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
	proseWrap: "preserve", 					// 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
	// disableLanguages: ["vue"], 			// 不格式化vue文件，vue文件的格式化单独设置
	endOfLine: "auto", 							// 结尾是 \n \r \n\r auto
	eslintIntegration: false, 			//不让prettier使用eslint的代码格式进行校验
	htmlWhitespaceSensitivity: "ignore",
	ignorePath: ".prettierignore",  // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
	parser: "babylon", 							// 格式化的解析器，默认是babylon
	requireConfig: false, 					// Require a 'prettierconfig' to format prettier
	stylelintIntegration: false, 		//不让prettier使用stylelint的代码格式进行校验
	tslintIntegration: false 				// 不让prettier使用tslint的代码格式进行校验
 
};

/* 原始資料
	{
		"$schema: "https://json.schemastore.org/prettierrc",
		"semi: false,
		"tabWidth: 2,
		"singleQuote: true,
		"printWidth: 100,
		"trailingComma: "none"
	}
*/