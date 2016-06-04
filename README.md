# SETable
利用类Excel多页多表兼容数据结构自动生成分页分表的HTML前端界面。支持合并单元格、单元格格式设定、按列排序等实际生产环境中所利用的功能。SETable是为[LeqeeData项目](https://bi.leqee.com/)而设计的。参考了早先开发的[SinriTable.js](http://github.everstray.com/SinriTable.js/)项目，并针对报表展示功能作了特异化。

## 结构设计

一个页面只能构建一个SETable。一个SETable由多个Sheet构成，每个Sheet内包含若干个AtomTable，每个AtomTable可以包含一个在左侧的行标题区，一个在右侧的列标题区和表体。AtomTable的左上角为特殊的行标题，属于固定内容。

如下所示：

| 左上角 | 列标题区 |
|----|----|
| 行标题区 | 表体 |

以上四个区块均可以视为四个表格，要求相邻边的格数一致。

## 数据结构

整个SETable由一个对象（Object）控制，可以由JSON解析而来，定义如下：

	var SETableDataObject = {
		sheets:[
			SheetDataObject_1,
			SheetDataObject_2 // ...
		]
	}

每个Sheet的构成为：

	var SheetDataObject = {		
		sheet_name:"Sheet Name",
		sheet_data:[
			AtomTableDataObject_1,
			AtomTableDataObject_2 // ...
		]
	}

每个AtomTable的构成为：

	var AtomTableDataObject = {
		corner_span:TableElementDataObject_Corner,
		fixed_left:TableElementDataObject_Left,
		header:TableElementDataObject_Header,
		body:TableElementDataObject_Body,
		tail:TableElementDataObject_Tail
	}

其中header和body是必须存在的，tail是可选的。fixed_left存在时，corner_span可选；fixed_left不存在时，corner_span将被忽略。

每个TableElementDataObject的构成为：

	var TableElementDataObject = [
		TableRowDataObject_1,
		TableRowDataObject_2 // ...
	]

每个TableRowDataObject的构成为：

	var TableRowDataObject = [
		TableCellDataObject_1,
		TableCellDataObject_2 // ...
	]

每个TableCellDataObject的构成为：

	// as string
	var TableCellDataObject = "VALUE OF CELL AS STRING"
	// as number
	var TableCellDataObject = 1
	// as object
	var TableCellDataObject = {
		value: 'string or number', 
		rowspan: 1, // default as 1
		colspan: 1, // default as 1
		style_id: 'CLASS_NAME FOR THIS TH/TD ELEMENT' // default as empty
	}

当TableCellDataObject被定义为对象时，value是必选的。

## 外观配置

使用config数据结构进行附加的配置。

	var config={
        cell:{
            width: 120,
            height: 30
        },
        box:{
            width: 300,
            height: 300
        },
        browser: { 
        	browser:'Safari', 
        	version : '601.6.17', 
        	agent : 'Safari 601.6.17', 
        	platform : 'Mac OS X' 
        }
    }

每个最小单元格的标准尺寸以cell表明。合并单元格后的尺寸按此标准尺寸加倍。每个表格整体可见区域尺寸由box表明。对于不同浏览器下的显示兼容问题，SETable提供了根据UserAgent信息进行对已知的浏览器环境进行适配的参数即browser，可以参照例子进行配置。

## 使用方法

### 初始化

在HTML中构建一个目标DIV，例如`<div id="target"></div>`。SETable所有新生成的元素均会包含在其内。

	var SETable=se_table('target',SETableDataObject,config);

### 排序

如果行标题区块中不存在包含跨行合并单元格，则列标题区最下方一行的每一个单元格内部右侧均会显示上下三角，用作排序按钮，默认按照数值化排序。

如果需要在初始化之后立即排序，可以使用sortForColumn方法。

	SETable.sortForColumn(ID_OF_TABLE,INDEX_OF_COLUMN_TO_SORT,SORT_METHOD);

* ID_OF_TABLE 每个表格的ID为 `SE_TABLE_ATOMTABLE_DIV_s_t` ，其中s为sheet的索引号，t为table的索引号，例如第一个sheet的第一个table的id为SE_TABLE_ATOMTABLE_DIV_0_0。
* INDEX_OF_COLUMN_TO_SORT 要排序的列的索引号，第一列就是0。
* SORT_METHOD 排序的方法，可取值为`asc`（字符顺序排序）、`desc`（字符倒序排序）、`number_asc`（数值化顺序排序）、`number_desc`（数值化倒序排序）。数值化排序会先移除表格单元格内容中的非数字字符串以转换成数字进行排序，主要用来处理带千分位分隔符的内容。

# 使用许可

Under the MIT License (MIT)

Copyright (c) 2016 Everstray Jun Sinri Edogawa


