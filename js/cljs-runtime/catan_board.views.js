goog.provide('catan_board.views');
/**
 * Dropdown component for selecting between available Catan scenarios.
 * Subscribes to :available-scenarios and :current-scenario.
 * Dispatches :set-scenario when selection changes.
 */
catan_board.views.scenario_selector = (function catan_board$views$scenario_selector(){
var available_scenarios = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"available-scenarios","available-scenarios",1891935930)], null)));
var current_scenario = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-scenario","current-scenario",387065885)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Scenario"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.scenario-dropdown","select.scenario-dropdown",-1317951103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(current_scenario),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var scenario_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scenario","set-scenario",-2002175398),scenario_id], null));
})], null),(function (){var iter__5480__auto__ = (function catan_board$views$scenario_selector_$_iter__33704(s__33705){
return (new cljs.core.LazySeq(null,(function (){
var s__33705__$1 = s__33705;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33705__$1);
if(temp__5804__auto__){
var s__33705__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33705__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__33705__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__33707 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__33706 = (0);
while(true){
if((i__33706 < size__5479__auto__)){
var scenario = cljs.core._nth(c__5478__auto__,i__33706);
cljs.core.chunk_append(b__33707,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scenario))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(scenario)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scenario)], null)));

var G__33744 = (i__33706 + (1));
i__33706 = G__33744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33707),catan_board$views$scenario_selector_$_iter__33704(cljs.core.chunk_rest(s__33705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33707),null);
}
} else {
var scenario = cljs.core.first(s__33705__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scenario))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(scenario)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scenario)], null)),catan_board$views$scenario_selector_$_iter__33704(cljs.core.rest(s__33705__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(available_scenarios);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),["Currently playing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33703_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33703_SHARP_),current_scenario);
}),available_scenarios))))].join('')], null)], null);
});
/**
 * Form section for editing scenario metadata (name, player count, grid pattern)
 */
catan_board.views.scenario_metadata_editor = (function catan_board$views$scenario_metadata_editor(draft){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Scenario Metadata"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Scenario Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(draft,""),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g., Custom Fog Islands",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__33708_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-scenario-name","update-scenario-name",617144459),p1__33708_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Give your scenario a unique name"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Grid Pattern"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"grid-pattern","grid-pattern",-1763214640).cljs$core$IFn$_invoke$arity$2(draft,""),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g., 3-4-5-4-3",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__33710_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-grid-pattern","update-grid-pattern",323988399),p1__33710_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Hex rows pattern (e.g., 3-4-5-4-3 for standard board)"], null)], null)], null);
});
/**
 * Form section for editing resource distribution (face-up or fog)
 */
catan_board.views.resource_distribution_editor = (function catan_board$views$resource_distribution_editor(draft,distribution_type){
var title = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(distribution_type,new cljs.core.Keyword(null,"face-up","face-up",-200804391)))?"Face-Up Resources":"Face-Down (Fog) Resources");
var distribution_key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(distribution_type,new cljs.core.Keyword(null,"face-up","face-up",-200804391)))?new cljs.core.Keyword(null,"face-up-distribution","face-up-distribution",1522439387):new cljs.core.Keyword(null,"fog-distribution","fog-distribution",792585602));
var event_key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(distribution_type,new cljs.core.Keyword(null,"face-up","face-up",-200804391)))?new cljs.core.Keyword(null,"update-face-up-resource","update-face-up-resource",839205879):new cljs.core.Keyword(null,"update-face-down-resource","update-face-down-resource",-585583305));
var resources = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(draft,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [distribution_key,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),cljs.core.PersistentArrayMap.EMPTY);
var resource_types = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"desert","desert",-559764082),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"wheat","wheat",783520466),new cljs.core.Keyword(null,"brick","brick",895065736),new cljs.core.Keyword(null,"ore","ore",-1419191389),new cljs.core.Keyword(null,"sheep","sheep",-1409901353),new cljs.core.Keyword(null,"wood","wood",149241168)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.resource-grid","div.resource-grid",-1804244934),(function (){var iter__5480__auto__ = (function catan_board$views$resource_distribution_editor_$_iter__33713(s__33714){
return (new cljs.core.LazySeq(null,(function (){
var s__33714__$1 = s__33714;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33714__$1);
if(temp__5804__auto__){
var s__33714__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33714__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__33714__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__33716 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__33715 = (0);
while(true){
if((i__33715 < size__5479__auto__)){
var resource_type = cljs.core._nth(c__5478__auto__,i__33715);
cljs.core.chunk_append(b__33716,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.resource-input","div.form-group.resource-input",753398287),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(resource_type)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(resources,resource_type,(0))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__33715,resource_type,c__5478__auto__,size__5479__auto__,b__33716,s__33714__$2,temp__5804__auto__,title,distribution_key,event_key,resources,resource_types){
return (function (p1__33712_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_key,resource_type,p1__33712_SHARP_.target.value], null));
});})(i__33715,resource_type,c__5478__auto__,size__5479__auto__,b__33716,s__33714__$2,temp__5804__auto__,title,distribution_key,event_key,resources,resource_types))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),resource_type], null)));

var G__33747 = (i__33715 + (1));
i__33715 = G__33747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33716),catan_board$views$resource_distribution_editor_$_iter__33713(cljs.core.chunk_rest(s__33714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33716),null);
}
} else {
var resource_type = cljs.core.first(s__33714__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.resource-input","div.form-group.resource-input",753398287),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(resource_type)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(resources,resource_type,(0))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (resource_type,s__33714__$2,temp__5804__auto__,title,distribution_key,event_key,resources,resource_types){
return (function (p1__33712_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_key,resource_type,p1__33712_SHARP_.target.value], null));
});})(resource_type,s__33714__$2,temp__5804__auto__,title,distribution_key,event_key,resources,resource_types))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),resource_type], null)),catan_board$views$resource_distribution_editor_$_iter__33713(cljs.core.rest(s__33714__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(resource_types);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(distribution_type,new cljs.core.Keyword(null,"face-up","face-up",-200804391)))?"Number of each resource type visible at game start":"Number of each resource type in fog tiles")], null)], null);
});
/**
 * Form section for editing number token distribution (face-up or fog)
 */
catan_board.views.number_token_distribution_editor = (function catan_board$views$number_token_distribution_editor(draft,distribution_type){
var title = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(distribution_type,new cljs.core.Keyword(null,"face-up","face-up",-200804391)))?"Face-Up Number Tokens":"Face-Down (Fog) Number Tokens");
var distribution_key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(distribution_type,new cljs.core.Keyword(null,"face-up","face-up",-200804391)))?new cljs.core.Keyword(null,"face-up-distribution","face-up-distribution",1522439387):new cljs.core.Keyword(null,"fog-distribution","fog-distribution",792585602));
var event_key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(distribution_type,new cljs.core.Keyword(null,"face-up","face-up",-200804391)))?new cljs.core.Keyword(null,"update-face-up-number","update-face-up-number",364870027):new cljs.core.Keyword(null,"update-face-down-number","update-face-down-number",1723284062));
var tokens = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(draft,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [distribution_key,new cljs.core.Keyword(null,"number-tokens","number-tokens",-158048886)], null),cljs.core.PersistentArrayMap.EMPTY);
var token_numbers = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5),(6),(8),(9),(10),(11),(12)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.number-grid","div.number-grid",885063500),(function (){var iter__5480__auto__ = (function catan_board$views$number_token_distribution_editor_$_iter__33718(s__33719){
return (new cljs.core.LazySeq(null,(function (){
var s__33719__$1 = s__33719;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33719__$1);
if(temp__5804__auto__){
var s__33719__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33719__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__33719__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__33721 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__33720 = (0);
while(true){
if((i__33720 < size__5479__auto__)){
var number = cljs.core._nth(c__5478__auto__,i__33720);
cljs.core.chunk_append(b__33721,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.number-input","div.form-group.number-input",437314250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tokens,number,(0))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__33720,number,c__5478__auto__,size__5479__auto__,b__33721,s__33719__$2,temp__5804__auto__,title,distribution_key,event_key,tokens,token_numbers){
return (function (p1__33717_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_key,number,p1__33717_SHARP_.target.value], null));
});})(i__33720,number,c__5478__auto__,size__5479__auto__,b__33721,s__33719__$2,temp__5804__auto__,title,distribution_key,event_key,tokens,token_numbers))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),number], null)));

var G__33751 = (i__33720 + (1));
i__33720 = G__33751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33721),catan_board$views$number_token_distribution_editor_$_iter__33718(cljs.core.chunk_rest(s__33719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33721),null);
}
} else {
var number = cljs.core.first(s__33719__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.number-input","div.form-group.number-input",437314250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tokens,number,(0))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (number,s__33719__$2,temp__5804__auto__,title,distribution_key,event_key,tokens,token_numbers){
return (function (p1__33717_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_key,number,p1__33717_SHARP_.target.value], null));
});})(number,s__33719__$2,temp__5804__auto__,title,distribution_key,event_key,tokens,token_numbers))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),number], null)),catan_board$views$number_token_distribution_editor_$_iter__33718(cljs.core.rest(s__33719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(token_numbers);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(distribution_type,new cljs.core.Keyword(null,"face-up","face-up",-200804391)))?"Number token distribution for visible hexes (note: 7 is omitted in Catan)":"Number token distribution for fog tiles")], null)], null);
});
/**
 * Form section for selecting hex type for board editing
 */
catan_board.views.hex_type_selection_editor = (function catan_board$views$hex_type_selection_editor(){
var selection_mode = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-hex-selection-mode","editor-hex-selection-mode",869835898)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Hex Type Selection"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hex-type-buttons","div.hex-type-buttons",1587569690),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-hex-type","button.btn-hex-type",-688419457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_mode,new cljs.core.Keyword(null,"terrain","terrain",704966005)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-editor-hex-selection-mode","set-editor-hex-selection-mode",-818346020),new cljs.core.Keyword(null,"terrain","terrain",704966005)], null));
})], null),"Terrain"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-hex-type","button.btn-hex-type",-688419457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_mode,new cljs.core.Keyword(null,"water","water",-824098213)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-editor-hex-selection-mode","set-editor-hex-selection-mode",-818346020),new cljs.core.Keyword(null,"water","water",-824098213)], null));
})], null),"Water"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-hex-type","button.btn-hex-type",-688419457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_mode,new cljs.core.Keyword(null,"fog","fog",1515389980)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-editor-hex-selection-mode","set-editor-hex-selection-mode",-818346020),new cljs.core.Keyword(null,"fog","fog",1515389980)], null));
})], null),"Fog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-hex-type","button.btn-hex-type",-688419457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_mode,new cljs.core.Keyword(null,"village","village",-950412200)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-editor-hex-selection-mode","set-editor-hex-selection-mode",-818346020),new cljs.core.Keyword(null,"village","village",-950412200)], null));
})], null),"Village"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-hex-type","button.btn-hex-type",-688419457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_mode,new cljs.core.Keyword(null,"harbor","harbor",-638543472)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-editor-hex-selection-mode","set-editor-hex-selection-mode",-818346020),new cljs.core.Keyword(null,"harbor","harbor",-638543472)], null));
})], null),"Harbor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Click a hex type, then click on the board to assign it"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-all-hex-assignments","clear-all-hex-assignments",-1030664923)], null));
})], null),"Clear All Hex Assignments"], null)], null);
});
/**
 * Form section for loading and managing custom scenarios
 */
catan_board.views.scenario_management_editor = (function catan_board$views$scenario_management_editor(){
var custom_scenarios = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenarios-list","custom-scenarios-list",162575344)], null)));
var draft = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Manage Scenarios"], null),((cljs.core.seq(custom_scenarios))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.scenario-loader","div.scenario-loader",219835597),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Load Existing Scenario"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select","select.form-select",1844412748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var scenario_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(scenario_id,new cljs.core.Keyword(null,"select","select",1147833503))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-custom-scenario-for-editing","load-custom-scenario-for-editing",-966809068),scenario_id,false], null));

return setTimeout((function (){
var current_draft = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_draft),scenario_id)){
if(cljs.core.truth_(confirm("You have unsaved changes. Loading a different scenario will discard them. Continue?"))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-custom-scenario-for-editing","load-custom-scenario-for-editing",-966809068),scenario_id,true], null));
} else {
return null;
}
} else {
return null;
}
}),(10));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"select"], null),"-- Select a scenario --"], null),(function (){var iter__5480__auto__ = (function catan_board$views$scenario_management_editor_$_iter__33723(s__33724){
return (new cljs.core.LazySeq(null,(function (){
var s__33724__$1 = s__33724;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33724__$1);
if(temp__5804__auto__){
var s__33724__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33724__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__33724__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__33726 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__33725 = (0);
while(true){
if((i__33725 < size__5479__auto__)){
var vec__33727 = cljs.core._nth(c__5478__auto__,i__33725);
var scenario_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33727,(0),null);
var scenario_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33727,(1),null);
cljs.core.chunk_append(b__33726,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(scenario_id)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(scenario_config)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scenario_id], null)));

var G__33752 = (i__33725 + (1));
i__33725 = G__33752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33726),catan_board$views$scenario_management_editor_$_iter__33723(cljs.core.chunk_rest(s__33724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33726),null);
}
} else {
var vec__33730 = cljs.core.first(s__33724__$2);
var scenario_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33730,(0),null);
var scenario_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33730,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(scenario_id)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(scenario_config)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scenario_id], null)),catan_board$views$scenario_management_editor_$_iter__33723(cljs.core.rest(s__33724__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(custom_scenarios);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Load a saved scenario for editing"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"No custom scenarios saved yet. Create and save one to see it here."], null))], null);
});
/**
 * Action buttons for scenario editor (save, reset, export)
 */
catan_board.views.editor_action_buttons = (function catan_board$views$editor_action_buttons(validation_errors){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Actions"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action-buttons","div.action-buttons",209691206),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-custom-scenario","save-custom-scenario",1178851334)], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.seq(validation_errors)], null),"Save Scenario"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-custom-scenario-draft","reset-custom-scenario-draft",-1688086976)], null));
})], null),"Reset to Defaults"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-custom-scenario","export-custom-scenario",562744864)], null));
})], null),"Export to Clipboard"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit-custom-scenario-editor","exit-custom-scenario-editor",-1948151582)], null));
})], null),"Exit Custom Scenario Editor"], null)], null),((cljs.core.seq(validation_errors))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text.error","p.help-text.error",-1904026610),"Fix validation errors before saving"], null):null)], null);
});
catan_board.views.board_scale = (function catan_board$views$board_scale(current_board_scale){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Board Scale"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.scale-controls","div.scale-controls",-1447866593),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-scale","button.btn-scale",686103766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decrease-scale","decrease-scale",-1538376033)], null));
})], null),"-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.scale-display","span.scale-display",1562437598),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_board_scale),"%"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-scale","button.btn-scale",686103766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"increase-scale","increase-scale",958722152)], null));
})], null),"+"], null)], null)], null);
});
catan_board.views.main_panel = (function catan_board$views$main_panel(){
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)));
var current_board_scale = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null)));
var tournament_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tournament-mode?","tournament-mode?",1595196011)], null)));
var swap_number_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap-number-mode?","swap-number-mode?",-906147176)], null)));
var developer_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"developer-mode?","developer-mode?",-664498178)], null)));
var landscape_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"landscape-mode?","landscape-mode?",1839338284)], null)));
var random_harbor_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-harbor-mode?","random-harbor-mode?",1753781411)], null)));
var sidebar_open_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-info-panel?","show-info-panel?",1687638256)], null)));
var editor_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-editor-mode?","custom-scenario-editor-mode?",1825372298)], null)));
var draft = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null)));
var validation_errors = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-validation-errors","custom-scenario-validation-errors",378706080)], null)));
var editor_hexes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-hexes","editor-hexes",-197015636)], null)));
var board_hexes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null)));
var hexes = (cljs.core.truth_(editor_mode_QMARK_)?editor_hexes:board_hexes);
var harbors = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"harbors","harbors",1522363032)], null)));
var selected_token_coord = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null)));
var fog_state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fog-state-hexes","fog-state-hexes",1162261524)], null)));
var current_scenario = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-scenario","current-scenario",387065885)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-container","div.app-container",-164087897),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar","div.sidebar",1454675964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sidebar_open_QMARK_)?"open":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-header","div.sidebar-header",-1668016167),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Controls"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.sidebar-close","button.sidebar-close",980828866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-info-panel","toggle-info-panel",-267315576)], null));
})], null),"\u00D7"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-content","div.sidebar-content",552678612),((cljs.core.not(editor_mode_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.scenario_selector], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Board Generation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generate-board","generate-board",2115038016)], null));
})], null),(cljs.core.truth_(loading_QMARK_)?"Generating...":"Generate New Board")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container","div.toggle-container",-1599195084),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle-label","label.toggle-label",224310556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),tournament_mode_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-tournament-mode","toggle-tournament-mode",-166606271)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toggle-text","span.toggle-text",-231231114),"Tournament Mode"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Prevents adjacent red numbers (6 & 8)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container","div.toggle-container",-1599195084),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle-label","label.toggle-label",224310556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),random_harbor_mode_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-random-harbor-mode","toggle-random-harbor-mode",198398702)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toggle-text","span.toggle-text",-231231114),"Random Harbor Mode"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Randomize harbor types"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Board Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
})], null),"Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shuffle-hidden-fog-tiles","shuffle-hidden-fog-tiles",-1011209727)], null));
})], null),"Shuffle Hidden Fog Tiles"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container","div.toggle-container",-1599195084),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle-label","label.toggle-label",224310556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),landscape_mode_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-landscape-mode","toggle-landscape-mode",-56367616)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toggle-text","span.toggle-text",-231231114),"Landscape Mode"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Flip orientation to landscape"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container","div.toggle-container",-1599195084),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle-label","label.toggle-label",224310556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),swap_number_mode_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-swap-number-mode","toggle-swap-number-mode",1724988811)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toggle-text","span.toggle-text",-231231114),"Swap Number Mode"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Click tokens to swap their numbers"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.board_scale,current_board_scale], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Developers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container","div.toggle-container",-1599195084),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle-label","label.toggle-label",224310556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),developer_mode_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-developer-mode","toggle-developer-mode",536484451)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toggle-text","span.toggle-text",-231231114),"Developer Mode"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Show hex coordinates for debugg ing"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container","div.toggle-container",-1599195084),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle-label","label.toggle-label",224310556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),editor_mode_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-custom-scenario-editor","toggle-custom-scenario-editor",-775717160)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toggle-text","span.toggle-text",-231231114),"Custom Scenario Editor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Create and edit custom scenarios"], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-form","div.editor-form",581817539),(cljs.core.truth_(draft)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container","div.toggle-container",-1599195084),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle-label","label.toggle-label",224310556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),landscape_mode_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-landscape-mode","toggle-landscape-mode",-56367616)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toggle-text","span.toggle-text",-231231114),"Landscape Mode"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-text","p.help-text",1523052202),"Flip orientation to landscape"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.board_scale,current_board_scale], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.scenario_management_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.scenario_metadata_editor,draft], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex_type_selection_editor], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.resource_distribution_editor,draft,new cljs.core.Keyword(null,"face-up","face-up",-200804391)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.number_token_distribution_editor,draft,new cljs.core.Keyword(null,"face-up","face-up",-200804391)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.resource_distribution_editor,draft,new cljs.core.Keyword(null,"fog","fog",1515389980)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.number_token_distribution_editor,draft,new cljs.core.Keyword(null,"fog","fog",1515389980)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.editor_action_buttons,validation_errors], null)], null):null),((cljs.core.seq(validation_errors))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-section","div.control-section",1862512591),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.validation-errors","div.validation-errors",533771118),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Validation Errors:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function catan_board$views$main_panel_$_iter__33734(s__33735){
return (new cljs.core.LazySeq(null,(function (){
var s__33735__$1 = s__33735;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33735__$1);
if(temp__5804__auto__){
var s__33735__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33735__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__33735__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__33737 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__33736 = (0);
while(true){
if((i__33736 < size__5479__auto__)){
var vec__33738 = cljs.core._nth(c__5478__auto__,i__33736);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33738,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33738,(1),null);
cljs.core.chunk_append(b__33737,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),error], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),field], null)));

var G__33753 = (i__33736 + (1));
i__33736 = G__33753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33737),catan_board$views$main_panel_$_iter__33734(cljs.core.chunk_rest(s__33735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33737),null);
}
} else {
var vec__33741 = cljs.core.first(s__33735__$2);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33741,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33741,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),error], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),field], null)),catan_board$views$main_panel_$_iter__33734(cljs.core.rest(s__33735__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(validation_errors);
})()], null)], null)], null):null)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.sidebar-toggle","button.sidebar-toggle",398992589),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-info-panel","toggle-info-panel",-267315576)], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sidebar_open_QMARK_)?"hidden":null)], null),"\u2630"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-container","div.board-container",1235437467),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((current_board_scale / (100))),")"].join(''),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"center center"], null)], null),((cljs.core.seq(hexes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.hex_grid,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"scenario","scenario",-316635333),current_scenario,new cljs.core.Keyword(null,"hexes","hexes",-1419989846),hexes,new cljs.core.Keyword(null,"harbors","harbors",1522363032),harbors,new cljs.core.Keyword(null,"swap-number-mode?","swap-number-mode?",-906147176),swap_number_mode_QMARK_,new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460),selected_token_coord,new cljs.core.Keyword(null,"developer-mode?","developer-mode?",-664498178),developer_mode_QMARK_,new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),fog_state], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading board... (",cljs.core.count(hexes)," hexes)"], null))], null)], null)], null);
});

//# sourceMappingURL=catan_board.views.js.map
