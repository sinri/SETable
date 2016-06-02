/**
 * Sinri Edogawa Table Version I
 * -------------------------------
 * Herz und Mund und Tat und Leben
 * muß von Christo Zeugnis geben
 * ohne Furcht und Heuchelei,
 * daß er Gott und Heiland sei.
 * ===============================
 * Copyright 2016 Sinri Edogawa
 * Design for LeqeeData Project
 * Published Under MIT License
 */

/**
 * Readme
 * ========
 * Params:
 * > target_div_id: the id of the target div
 * > sheets_data: the data struct for the table. You can try with 
 	var sheets_data_sample=JSON.parse('{"sheets":[{"sheet_name":"\u7ade\u54c1\u5e97\u94fa\u60c5\u62a5","sheet_data":[{"corner_span":"X","fixed_left":[["I"],["II"],["III"],["IV"],["V"],["VI"],["VII"]],"header":[["\u5e97\u94fa","05.01-05.01","05.02-05.08","05.09-05.15","05.16-05.22","05.23-05.29","05.30-05.31"]],"body":[["noah\u4f18\u5b66\u90ce\u4e13\u5356\u5e97",{"value_type":"String","value":"11,688"},{"value_type":"String","value":"65,368"},{"value_type":"String","value":"48,926"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u4e07\u626c\u6570\u7801\u4e13\u8425\u5e97",{"value_type":"String","value":"65,240"},{"value_type":"String","value":"1,121,698"},{"value_type":"String","value":"81,347"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u5f18\u8d3a\u6570\u7801\u4e13\u8425\u5e97",{"value_type":"String","value":"52,749"},{"value_type":"String","value":"121,388"},{"value_type":"String","value":"121,273"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u5feb\u6613\u5178\u7231\u7ef4\u4f0a\u4e13\u5356\u5e97",{"value_type":"String","value":"6,431"},{"value_type":"String","value":"170,881"},{"value_type":"String","value":"208,925"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u6613\u5b66\u5178\u65d7\u8230\u5e97",{"value_type":"String","value":"28,523"},{"value_type":"String","value":"66,982"},{"value_type":"String","value":"100,788"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u6b65\u6b65\u9ad8\u6bcd\u5a74\u65d7\u8230\u5e97",{"value_type":"String","value":"61,281"},{"value_type":"String","value":"225,206"},{"value_type":"String","value":"229,994"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u6e05\u534e\u7d2b\u5149\u4e16\u7eaa\u901a\u7528\u5e97",{"value_type":"String","value":"7,276"},{"value_type":"String","value":"79,586"},{"value_type":"String","value":"89,284"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}]],"tail":[]}]},{"sheet_name":"\u7ade\u54c1\u5e97\u94fa\u60c5\u62a5 - 2","sheet_data":[{"corner_span":"Y","fixed_left":[["I"],["II"],["III"],["IV"],["V"],["VI"],["VII"]],"header":[["\u5e97\u94fa","05.01-05.01","05.02-05.08","05.09-05.15","05.16-05.22","05.23-05.29","05.30-05.31"]],"body":[["noah\u4f18\u5b66\u90ce\u4e13\u5356\u5e97",{"value_type":"String","value":"11,688"},{"value_type":"String","value":"65,368"},{"value_type":"String","value":"48,926"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u4e07\u626c\u6570\u7801\u4e13\u8425\u5e97",{"value_type":"String","value":"65,240"},{"value_type":"String","value":"1,121,698"},{"value_type":"String","value":"81,347"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u5f18\u8d3a\u6570\u7801\u4e13\u8425\u5e97",{"value_type":"String","value":"52,749"},{"value_type":"String","value":"121,388"},{"value_type":"String","value":"121,273"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u5feb\u6613\u5178\u7231\u7ef4\u4f0a\u4e13\u5356\u5e97",{"value_type":"String","value":"6,431"},{"value_type":"String","value":"170,881"},{"value_type":"String","value":"208,925"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u6613\u5b66\u5178\u65d7\u8230\u5e97",{"value_type":"String","value":"28,523"},{"value_type":"String","value":"66,982"},{"value_type":"String","value":"100,788"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u6b65\u6b65\u9ad8\u6bcd\u5a74\u65d7\u8230\u5e97",{"value_type":"String","value":"61,281"},{"value_type":"String","value":"225,206"},{"value_type":"String","value":"229,994"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}],["\u6e05\u534e\u7d2b\u5149\u4e16\u7eaa\u901a\u7528\u5e97",{"value_type":"String","value":"7,276"},{"value_type":"String","value":"79,586"},{"value_type":"String","value":"89,284"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"},{"value_type":"String","value":"0"}]],"tail":[]}]}]}');
 * > config: the size config, contains cell and box, each contains width and height;
 */

/**
 * Polyfill
 * This methods have been added to the ECMAScript 6 specification and may not be available in all JavaScript implementations yet. 
 * But you can polyfill.
 */

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}


var se_table=function(target_div_id, sheets_data,config){
	var that=this;

	this.target_div=document.getElementById(target_div_id);
	this.sheets_data=sheets_data;

	//change css
	this.config={}
	this.config.cell_width=100;
	this.config.cell_height=30;
	this.config.box_width=300;
	this.config.box_height=200;

	this.config.scroll_size=0;
	console.log(config);
	if(config.browser){
		if(config.browser.platform.search("Windows")!=-1){
			if(config.browser.browser.search("Chrome")!=-1){
				this.config.scroll_size=17;
			}
			else if(config.browser.browser.search("Internet Explorer")!=-1){
				this.config.scroll_size=17;
			}
			else if(config.browser.browser.search("Firefox")!=-1){
				this.config.scroll_size=17;
			}
		}
	}
	console.log(this.config);

	if(config){
		if(config.cell){
			if(config.cell.width){
				this.config.cell_width=config.cell.width;
			}
			if(config.cell.height){
				this.config.cell_height=config.cell.height;
			}
		}
		if(config.box){
			if(config.box.width){
				this.config.box_width=config.box.width;
			}
			if(config.box.height){
				this.config.box_width=config.box.height;
			}
		}
	}

	this.init=function(){
		//TODO
		var html="";
		// Various
		var tabs_div=that.createTabs();
		var sheets=that.createSheets();


		//Fin
		html+=tabs_div+sheets;
		that.target_div.innerHTML=(html);

		if(that.sheets_data && that.sheets_data.sheets && that.sheets_data.sheets.length>0){
			onSETableTabSwitch(0);
		}
	}

	this.createTabs=function(){
		var html="<div class='SE_TABLE_TAB_DIV'>";

		for(var sheet_index in that.sheets_data.sheets){
			var sheet_item=that.sheets_data.sheets[sheet_index];
			var sheet_name=sheet_item.sheet_name;

			var class_names="SE_TABLE_TAB_SPAN"

			if(sheet_index==0){
				class_names+="_ACTIVE";
			}else{
				class_names+="_INACTIVE";
			}

			html += "&nbsp;<span id='SE_TABLE_TAB_SPAN_OF_"+sheet_index+"' class='"+class_names+"' onclick='onSETableTabSwitch("+sheet_index+")'>"+sheet_name+"</span>&nbsp;";
		}

		html+="</div>";
		return html;
	}

	this.createSheets=function(){
		var html="<div class='SE_TABLE_SHEETS_DIV'>";

		for(var sheet_index in that.sheets_data.sheets){
			var sheet_item=that.sheets_data.sheets[sheet_index];

			var sheet=that.createSheet(sheet_item.sheet_data,sheet_index);
			html+=sheet;
		}

		html+="</div>";
		return html;
	}

	this.createSheet=function(sheet_obj,sheet_index){
		var SHEET_DIV_ID="SE_TABLE_SHEET_DIV_"+sheet_index;
		var html="<div id='"+SHEET_DIV_ID+"' class='SE_TABLE_SHEET_DIV'>";

		for(var table_index in sheet_obj){
			var table_item=sheet_obj[table_index];

			var table=that.createTable(table_item,sheet_index,table_index);
			html+=table;
		}

		html+="</div>";
		return html;
	}

	this.createTable=function(table_obj,sheet_index,table_index){
		var TABLE_DIV_ID="SE_TABLE_ATOMTABLE_DIV_"+sheet_index+"_"+table_index;
		var html="<div id='"+TABLE_DIV_ID+"' class='SE_TABLE_ATOMTABLE_DIV'>";

		//HEAD BODY TAIL + fixed_left + corner_span
		// html+="<!-- "+JSON.stringify(table_obj)+" -->";

		//create left fixed cols
		var has_left_bar=false;
		if(table_obj.fixed_left){
			var LEFT_DIV_ID="SE_TABLE_"+sheet_index+"_"+table_index+"_LEFT_DIV";
			var LEFT_DIV_INNER_ID="SE_TABLE_"+sheet_index+"_"+table_index+"_LEFT_DIV_INNER";

			html+="<div id='"+LEFT_DIV_ID+"' class='SE_TABLE_LEFT_DIV'>";
			html+="<span>";
			html+=(table_obj.corner_span?table_obj.corner_span:'');
			html+="</span>";
			html+="<div id='"+LEFT_DIV_INNER_ID+"' class='SE_TABLE_LEFT_DIV_INNER'>";
			html+="<table cellpadding='0' cellspacing='0' border='0' class='SE_TABLE_LEFT_DIV_TABLE'>";

			for(var row_index in table_obj.fixed_left){
				var row = table_obj.fixed_left[row_index];

				html+="<tr id='SE_TABLE_LEFT_ROW_"+sheet_index+"_"+table_index+"_"+row_index+"'>";

				for(var col_index in row){
					var col=row[col_index];
					if(!col)continue;
					html+="<th ";
					if(col.rowspan){
						html+="rowspan='"+col.rowspan+"' ";
					}
					if(col.colspan){
						html+="colspan='"+col.rowspan+"' ";
					}
					html+="class='";
					if(col.style_id){
						html+=col.style_id+" ";
					}
					html+="'";
					html+=">";

					html+="<div>";
					var cell_value=((!col.value)?col:col.value);
					html+="<input class='SE_TABLE_BODY_CELL_INPUT' readonly='readonly' value='"+cell_value+"'>";
					html+="</div>";

					html+="</th>";
				}

				html+="</tr>";
			}

			html+="</table>";
			html+="</div>";
			html+="</div>";

			has_left_bar=true;
		}

		//create hontai
		var RIGHT_DIV_HEADER_ID="SE_TABLE_"+sheet_index+"_"+table_index+"_RIGHT_DIV_HEADER";

		var inner_html="";
		var header_real_cols=0;

		//header
		for(var row_index in table_obj.header){
			var row=table_obj.header[row_index];

			inner_html+="<tr>";

			for(var col_index in row){
				var col=row[col_index];
				if(!col)continue;
				inner_html+="<td ";
				if(col.rowspan){
					inner_html+="rowspan='"+col.rowspan+"' ";
				}
				if(col.colspan){
					inner_html+="colspan='"+col.rowspan+"' ";
					header_real_cols+=col.rowspan*1;
				}else{
					header_real_cols+=1;
				}
				inner_html+="class='";
				if(col.style_id){
					inner_html+=col.style_id+" ";
				}
				inner_html+="'";
				inner_html+=">";

				inner_html+="<div>";

				var cell_value=((!col.value)?col:col.value);
				inner_html+="<input class='SE_TABLE_BODY_CELL_INPUT' readonly='readonly' value='"+cell_value+"'>";

				inner_html+="</div>";

				inner_html+="</td>";
			}

			inner_html+="</tr>";
		}

		html+="<div class='SE_TABLE_RIGHT_DIV "+(has_left_bar?'':'SE_TABLE_RIGHT_DIV_FULL')+"'>";
		html+="<div class='SE_TABLE_RIGHT_DIV_HEADER' id='"+RIGHT_DIV_HEADER_ID+"' style='width:"+(header_real_cols*that.config.cell_width)+"px;"+"'>";
		html+="<div class='SE_TABLE_RIGHT_DIV_HEADER_INNER'>";
		html+="<table cellpadding='0' cellspacing='0' border='0'>";
		html+=inner_html;
		html+="</table>";
		html+="</div>";
		html+="</div>";
		
		//body
		var RIGHT_DIV_BODY_ID="SE_TABLE_"+sheet_index+"_"+table_index+"_RIGHT_DIV_BODY";
		html+="<div class='SE_TABLE_RIGHT_DIV_BODY' id='"+RIGHT_DIV_BODY_ID+"' ";
		html+=" onscroll='onSETableBodyScroll(\"\"+"+sheet_index+",\"\"+"+table_index+")'";
		html+=" style='width:"+(header_real_cols*that.config.cell_width)+"px;"+"'>";
		html+="<table cellpadding='0' cellspacing='0' border='0'>";

		var row_bgc=0;

		for(var row_index in table_obj.body){
			var row=table_obj.body[row_index];

			html+="<tr id='SE_TABLE_BODY_ROW_"+sheet_index+"_"+table_index+"_"+row_index+"'>";

			for(var col_index in row){
				var col=row[col_index];
				if(!col)continue;
				html+="<td ";
				if(col.rowspan){
					html+="rowspan='"+col.rowspan+"' ";
				}
				if(col.colspan){
					html+="colspan='"+col.rowspan+"' ";
				}
				html+="class='";
				if(col.style_id){
					html+=col.style_id+" ";
				}else{
					if(row_bgc%2==0){
						html+="SE_TABLE_BG_WHITE ";
					}else{
						html+="SE_TABLE_BG_LIGHT ";
					}
				}
				html+="'";
				html+=">";

				html+="<div>";
				var cell_value=((!col.value)?col:col.value);
				html+="<input class='SE_TABLE_BODY_CELL_INPUT' readonly='readonly' value='"+cell_value+"'>";
				html+="</div>";

				html+="</td>";
			}

			html+="</tr>";

			row_bgc+=1;
		}
		for(var row_index in table_obj.tail){
			var row=table_obj.tail[row_index];

			html+="<tr>";

			for(var col_index in row){
				var col=row[col_index];
				if(!col)continue;
				html+="<td ";
				if(col.rowspan){
					html+="rowspan='"+col.rowspan+"' ";
				}
				if(col.colspan){
					html+="colspan='"+col.rowspan+"' ";
				}
				html+="class='";
				if(col.style_id){
					html+=col.style_id+" ";
				}else{
					if(row_bgc%2==0){
						html+="SE_TABLE_BG_WHITE ";
					}else{
						html+="SE_TABLE_BG_LIGHT ";
					}
				}
				html+="'";
				html+=">";

				html+="<div>";
				var cell_value=((!col.value)?col:col.value);
				html+="<input class='SE_TABLE_BODY_CELL_INPUT' readonly='readonly' value='"+cell_value+"'>";
				html+="</div>";

				html+="</td>";
			}

			html+="</tr>";

			row_bgc+=1;
		}

		html+="</table>";
		html+="</div>";

		html+="</div>";

		html+="</div>";
		return html;
	}

	this.sortForColumn=function(ID_OF_SE_TABLE_ATOMTABLE_DIV_S_T,base_col_id,sort_method){
		function getRightTrListItemValue(right_tr_list,row_id){
			return (right_tr_list[row_id].children[base_col_id].children[0].children[0].value);
		}

		console.log('sortForColumn('+ID_OF_SE_TABLE_ATOMTABLE_DIV_S_T+','+base_col_id+')');
		var s_t=ID_OF_SE_TABLE_ATOMTABLE_DIV_S_T.substr(23).split('_');
		var sheet_id=s_t[0];
		var table_id=s_t[1];
		console.log('OF SHEET '+sheet_id+' TABLE '+table_id);
		//LEFT TRs as SE_TABLE_LEFT_ROW_S_T_R
		//RIGHT TRs as SE_TABLE_BODY_ROW_S_T_R
		var left_tr_list=$('tr').filter(function() {
	        return this.id.startsWith('SE_TABLE_LEFT_ROW_'+sheet_id+"_"+table_id+"_");
	    })
	    var right_tr_list=$('tr').filter(function() {
	        return this.id.startsWith('SE_TABLE_BODY_ROW_'+sheet_id+"_"+table_id+"_");
	    })

	    var sortObjs=[];
	    for(var i=0;i<right_tr_list.size();i++){
	    	sortObjs[i]={k:i,v:getRightTrListItemValue(right_tr_list,i)};
	    }
	    // console.log(sortObjs)

	    sortObjs.sort(function(a,b){
	    	if(sort_method=='number_asc'){
	    		var va=parseFloat(a.v.replace(/[^0-9\.\-\+]/,''));
	    		var vb=parseFloat(b.v.replace(/[^0-9\.\-\+]/,''));
	    		return va-vb;
	    	}
	    	else if(sort_method=='number_desc'){
	    		var va=parseFloat(a.v.replace(/[^0-9\.\-\+]/,''));
	    		var vb=parseFloat(b.v.replace(/[^0-9\.\-\+]/,''));
	    		return vb-va;
	    	}
	    	else if(sort_method=='desc'){
	    		var r = (a.v < b.v);
	    		return r?1:-1;
	    	}
	    	else{//or as 'asc'
	    		var r = (a.v > b.v);
	    		return r?1:-1;
	    	}
	    })
	    // console.log(sortObjs)

	    var left=[];
	    var right=[];

	    for(var k in sortObjs){
	    	console.log(sortObjs[k]);
	    	if(left_tr_list.size()>0){
	    		left[k]=left_tr_list[sortObjs[k].k].innerHTML;
	    	}
	    	right[k]=right_tr_list[sortObjs[k].k].innerHTML;
	    }
	    // console.log(left);
	    // console.log(right);

	    for(var i=0;i<right_tr_list.length;i++){
	    	if(left_tr_list.size()>0){
	    		left_tr_list[i].innerHTML=left[i];
	    	}
	    	right_tr_list[i].innerHTML=right[i];
	    }
	}

	this.init();

	$(".SE_TABLE_LEFT_DIV span").css('width',this.config.cell_width+"px");
	$(".SE_TABLE_LEFT_DIV span").css('height',this.config.cell_height+"px");
	$(".SE_TABLE_ATOMTABLE_DIV td").css('width',this.config.cell_width+"px");
	$(".SE_TABLE_ATOMTABLE_DIV td").css('height',this.config.cell_height+"px");
	$(".SE_TABLE_ATOMTABLE_DIV th").css('width',this.config.cell_width+"px");
	$(".SE_TABLE_ATOMTABLE_DIV th").css('height',this.config.cell_height+"px");

	$(".SE_TABLE_ATOMTABLE_DIV td").css('line-height',(this.config.cell_height-2)+"px");
	$(".SE_TABLE_ATOMTABLE_DIV th").css('line-height',(this.config.cell_height-2)+"px");
	$(".SE_TABLE_LEFT_DIV span").css('line-height',(this.config.cell_height-2)+"px");

	$(".SE_TABLE_LEFT_DIV").css("width",(this.config.cell_width+2)+"px");
	$(".SE_TABLE_LEFT_DIV").css("height",(this.config.box_height+2)+"px");
	$(".SE_TABLE_LEFT_DIV_INNER").css("width",(this.config.cell_width+2)+"px");
	$(".SE_TABLE_LEFT_DIV_INNER").css("height",(this.config.box_height-this.config.cell_height)+"px");

	$(".SE_TABLE_RIGHT_DIV").css("width",(this.config.box_width-this.config.cell_width)+"px");
	$(".SE_TABLE_RIGHT_DIV").css("height",(this.config.box_height+this.config.scroll_size)+"px");

	//if no LEFT
	$(".SE_TABLE_RIGHT_DIV_FULL").css("width",(this.config.box_width)+"px");

	$(".SE_TABLE_ATOMTABLE_DIV").css("width",(this.config.box_width+2)+"px");
	$(".SE_TABLE_ATOMTABLE_DIV").css("height",(this.config.box_height+1)+"px");

	$(".SE_TABLE_RIGHT_DIV_BODY").css("width",($(".SE_TABLE_RIGHT_DIV_BODY").css("width").replace('px','')*1+this.config.scroll_size)+"px")
	$(".SE_TABLE_RIGHT_DIV_BODY").css("height",(this.config.box_height-this.config.cell_height-2)+"px");

	return this;
}

function onSETableBodyScroll(sheet_index,table_index){
	var RIGHT_DIV_BODY_ID="SE_TABLE_"+sheet_index+"_"+table_index+"_RIGHT_DIV_BODY";
	var LEFT_DIV_INNER_ID="SE_TABLE_"+sheet_index+"_"+table_index+"_LEFT_DIV_INNER";
	var RIGHT_DIV_HEADER_ID="SE_TABLE_"+sheet_index+"_"+table_index+"_RIGHT_DIV_HEADER";

	var a=document.getElementById(RIGHT_DIV_BODY_ID).scrollTop;    
	var b=document.getElementById(RIGHT_DIV_BODY_ID).scrollLeft;    
	var dd=document.getElementById(LEFT_DIV_INNER_ID);
	if(dd){
		dd.scrollTop=a;    
	}
	var hh=document.getElementById(RIGHT_DIV_HEADER_ID);
	if(hh){
		hh.scrollLeft=b;
		hh.scrollTop=0;       
	}
}

function onSETableTabSwitch(active_target){
	$("span.SE_TABLE_TAB_SPAN_ACTIVE").attr('class','SE_TABLE_TAB_SPAN_INACTIVE');

	$("#SE_TABLE_TAB_SPAN_OF_"+active_target).attr('class','SE_TABLE_TAB_SPAN_ACTIVE');

	var SHEET_DIV_ID="#SE_TABLE_SHEET_DIV_"+active_target;
	$('div.SE_TABLE_SHEET_DIV').css('display','none');
	$(SHEET_DIV_ID).css("display",'block');
}


