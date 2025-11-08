goog.provide('re_com.typeahead');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__10583){
var map__10584 = p__10583;
var map__10584__$1 = cljs.core.__destructure_map(map__10584);
var args = map__10584__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10584__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10584__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10584__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10584__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10584__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10584__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10584__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10584__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__10585 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__5002__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__10585,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__10585,external_model_value));
} else {
return G__10585;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__10592,event){
var map__10593 = p__10592;
var map__10593__$1 = cljs.core.__destructure_map(map__10593);
var state = map__10593__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10593__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10593__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10593__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__10596 = event;
var G__10596__$1 = (((G__10596 instanceof cljs.core.Keyword))?G__10596.fqn:null);
switch (G__10596__$1) {
case "input-text-blurred":
var and__5000__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__5000__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__5000__auto__ = cljs.core.not(rigid_QMARK___$1);
if(and__5000__auto__){
var or__5002__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__5000__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__10607,event){
var map__10608 = p__10607;
var map__10608__$1 = cljs.core.__destructure_map(map__10608);
var state = map__10608__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10608__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__10609 = event;
var G__10609__$1 = (((G__10609 instanceof cljs.core.Keyword))?G__10609.fqn:null);
switch (G__10609__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__10611,new_value){
var map__10612 = p__10611;
var map__10612__$1 = cljs.core.__destructure_map(map__10612);
var state = map__10612__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10612__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__10613,suggestion){
var map__10614 = p__10613;
var map__10614__$1 = cljs.core.__destructure_map(map__10614);
var state = map__10614__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10614__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__10616 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__10616,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__10616;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__10627,index){
var map__10629 = p__10627;
var map__10629__$1 = cljs.core.__destructure_map(map__10629);
var state = map__10629__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10629__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__10630 = state;
var G__10630__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10630,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__10630__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__10630__$1,suggestion):G__10630__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__10630__$2,suggestion);
} else {
return G__10630__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__10634,index){
var map__10637 = p__10634;
var map__10637__$1 = cljs.core.__destructure_map(map__10637);
var state = map__10637__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10637__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__10642){
var map__10672 = p__10642;
var map__10672__$1 = cljs.core.__destructure_map(map__10672);
var state = map__10672__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10672__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__10684 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__10684,suggestion_active_index);
} else {
return G__10684;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__10693){
var map__10694 = p__10693;
var map__10694__$1 = cljs.core.__destructure_map(map__10694);
var state = map__10694__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10694__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10694__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__10695 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__10695,re_com.typeahead.wrap(((function (){var or__5002__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__10695;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__10698){
var map__10699 = p__10698;
var map__10699__$1 = cljs.core.__destructure_map(map__10699);
var state = map__10699__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10699__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10699__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__10700 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__10700,re_com.typeahead.wrap(((function (){var or__5002__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__10700;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__10702 = state;
var G__10702__$1 = re_com.typeahead.clear_suggestions(G__10702)
;
var G__10702__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__10702__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__10702__$2,null);
} else {
return G__10702__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__10711){
var map__10712 = p__10711;
var map__10712__$1 = cljs.core.__destructure_map(map__10712);
var state = map__10712__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10712__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10712__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10712__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__5000__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__5000__auto__;
}
})())){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5802__auto__ = (function (){var G__10721 = text;
var G__10722 = (function (p1__10720_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__10720_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__10721,G__10722) : data_source.call(null,G__10721,G__10722));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var return_value = temp__5802__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__10281__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10282__auto__ = (function (){var switch__10193__auto__ = (function (state_10757){
var state_val_10758 = (state_10757[(1)]);
if((state_val_10758 === (1))){
var state_10757__$1 = state_10757;
var statearr_10769_11083 = state_10757__$1;
(statearr_10769_11083[(2)] = null);

(statearr_10769_11083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10758 === (2))){
var state_10757__$1 = state_10757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10757__$1,(4),c_search);
} else {
if((state_val_10758 === (3))){
var inst_10753 = (state_10757[(2)]);
var state_10757__$1 = state_10757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10757__$1,inst_10753);
} else {
if((state_val_10758 === (4))){
var inst_10737 = (state_10757[(7)]);
var inst_10737__$1 = (state_10757[(2)]);
var inst_10739 = cljs.core.deref(state_atom);
var inst_10740 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_10739);
var inst_10741 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_10737__$1);
var state_10757__$1 = (function (){var statearr_10772 = state_10757;
(statearr_10772[(8)] = inst_10740);

(statearr_10772[(7)] = inst_10737__$1);

return statearr_10772;
})();
if(inst_10741){
var statearr_10773_11084 = state_10757__$1;
(statearr_10773_11084[(1)] = (5));

} else {
var statearr_10776_11085 = state_10757__$1;
(statearr_10776_11085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10758 === (5))){
var inst_10740 = (state_10757[(8)]);
var inst_10743 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_10744 = re_com.typeahead.search_data_source_BANG_(inst_10740,state_atom,"");
var state_10757__$1 = (function (){var statearr_10780 = state_10757;
(statearr_10780[(9)] = inst_10743);

return statearr_10780;
})();
var statearr_10781_11086 = state_10757__$1;
(statearr_10781_11086[(2)] = inst_10744);

(statearr_10781_11086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10758 === (6))){
var inst_10740 = (state_10757[(8)]);
var inst_10737 = (state_10757[(7)]);
var inst_10746 = re_com.typeahead.search_data_source_BANG_(inst_10740,state_atom,inst_10737);
var state_10757__$1 = state_10757;
var statearr_10782_11087 = state_10757__$1;
(statearr_10782_11087[(2)] = inst_10746);

(statearr_10782_11087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10758 === (7))){
var inst_10748 = (state_10757[(2)]);
var state_10757__$1 = (function (){var statearr_10786 = state_10757;
(statearr_10786[(10)] = inst_10748);

return statearr_10786;
})();
var statearr_10787_11088 = state_10757__$1;
(statearr_10787_11088[(2)] = null);

(statearr_10787_11088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto____0 = (function (){
var statearr_10789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10789[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto__);

(statearr_10789[(1)] = (1));

return statearr_10789;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto____1 = (function (state_10757){
while(true){
var ret_value__10195__auto__ = (function (){try{while(true){
var result__10196__auto__ = switch__10193__auto__(state_10757);
if(cljs.core.keyword_identical_QMARK_(result__10196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10196__auto__;
}
break;
}
}catch (e10790){var ex__10197__auto__ = e10790;
var statearr_10791_11111 = state_10757;
(statearr_10791_11111[(2)] = ex__10197__auto__);


if(cljs.core.seq((state_10757[(4)]))){
var statearr_10794_11112 = state_10757;
(statearr_10794_11112[(1)] = cljs.core.first((state_10757[(4)])));

} else {
throw ex__10197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11114 = state_10757;
state_10757 = G__11114;
continue;
} else {
return ret_value__10195__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto__ = function(state_10757){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto____1.call(this,state_10757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10194__auto__;
})()
})();
var state__10283__auto__ = (function (){var statearr_10798 = f__10282__auto__();
(statearr_10798[(6)] = c__10281__auto__);

return statearr_10798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10283__auto__);
}));

return c__10281__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__10804 = cljs.core.deref(state_atom);
var map__10804__$1 = cljs.core.__destructure_map(map__10804);
var state = map__10804__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10804__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10804__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__10802_SHARP_){
var G__10806 = p1__10802_SHARP_;
var G__10806__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__10806,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__10806__$1,new_text);
} else {
return G__10806__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__10811 = cljs.core._EQ_;
var expr__10812 = event.which;
if(cljs.core.truth_((pred__10811.cljs$core$IFn$_invoke$arity$2 ? pred__10811.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__10812) : pred__10811.call(null,goog.events.KeyCodes.UP,expr__10812)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__10811.cljs$core$IFn$_invoke$arity$2 ? pred__10811.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__10812) : pred__10811.call(null,goog.events.KeyCodes.DOWN,expr__10812)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__10811.cljs$core$IFn$_invoke$arity$2 ? pred__10811.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__10812) : pred__10811.call(null,goog.events.KeyCodes.ENTER,expr__10812)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__10811.cljs$core$IFn$_invoke$arity$2 ? pred__10811.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__10812) : pred__10811.call(null,goog.events.KeyCodes.ESC,expr__10812)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__10811.cljs$core$IFn$_invoke$arity$2 ? pred__10811.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__10812) : pred__10811.call(null,goog.events.KeyCodes.TAB,expr__10812)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11131 = arguments.length;
var i__5727__auto___11132 = (0);
while(true){
if((i__5727__auto___11132 < len__5726__auto___11131)){
args__5732__auto__.push((arguments[i__5727__auto___11132]));

var G__11137 = (i__5727__auto___11132 + (1));
i__5727__auto___11132 = G__11137;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__10849){
var map__10851 = p__10849;
var map__10851__$1 = cljs.core.__destructure_map(map__10851);
var args = map__10851__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__10856 = re_com.typeahead.make_typeahead_state(args);
var map__10856__$1 = cljs.core.__destructure_map(map__10856);
var state = map__10856__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10856__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10856__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var G__11140__delegate = function (p__10861){
var map__10862 = p__10861;
var map__10862__$1 = cljs.core.__destructure_map(map__10862);
var args__$1 = map__10862__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__10872 = cljs.core.deref(state_atom);
var map__10872__$1 = cljs.core.__destructure_map(map__10872);
var state__$1 = map__10872__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10872__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10872__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10872__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10872__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__5002__auto__ = width;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__5480__auto__ = (function re_com$typeahead$iter__10880(s__10881){
return (new cljs.core.LazySeq(null,(function (){
var s__10881__$1 = s__10881;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__10881__$1);
if(temp__5804__auto__){
var s__10881__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10881__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__10881__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__10883 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__10882 = (0);
while(true){
if((i__10882 < size__5479__auto__)){
var vec__10897 = cljs.core._nth(c__5478__auto__,i__10882);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10897,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10897,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__10883,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__10882,selected_QMARK_,vec__10897,i,s,c__5478__auto__,size__5479__auto__,b__10883,s__10881__$2,temp__5804__auto__,map__10872,map__10872__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10862,map__10862__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10856,map__10856__$1,state,c_search,c_input,state_atom,input_text_model,map__10851,map__10851__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__10882,selected_QMARK_,vec__10897,i,s,c__5478__auto__,size__5479__auto__,b__10883,s__10881__$2,temp__5804__auto__,map__10872,map__10872__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10862,map__10862__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10856,map__10856__$1,state,c_search,c_input,state_atom,input_text_model,map__10851,map__10851__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__10882,selected_QMARK_,vec__10897,i,s,c__5478__auto__,size__5479__auto__,b__10883,s__10881__$2,temp__5804__auto__,map__10872,map__10872__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10862,map__10862__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10856,map__10856__$1,state,c_search,c_input,state_atom,input_text_model,map__10851,map__10851__$1,args){
return (function (p1__10841_SHARP_){
p1__10841_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__10882,selected_QMARK_,vec__10897,i,s,c__5478__auto__,size__5479__auto__,b__10883,s__10881__$2,temp__5804__auto__,map__10872,map__10872__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10862,map__10862__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10856,map__10856__$1,state,c_search,c_input,state_atom,input_text_model,map__10851,map__10851__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__11161 = (i__10882 + (1));
i__10882 = G__11161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10883),re_com$typeahead$iter__10880(cljs.core.chunk_rest(s__10881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10883),null);
}
} else {
var vec__10913 = cljs.core.first(s__10881__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10913,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10913,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__10913,i,s,s__10881__$2,temp__5804__auto__,map__10872,map__10872__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10862,map__10862__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10856,map__10856__$1,state,c_search,c_input,state_atom,input_text_model,map__10851,map__10851__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__10913,i,s,s__10881__$2,temp__5804__auto__,map__10872,map__10872__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10862,map__10862__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10856,map__10856__$1,state,c_search,c_input,state_atom,input_text_model,map__10851,map__10851__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__10913,i,s,s__10881__$2,temp__5804__auto__,map__10872,map__10872__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10862,map__10862__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10856,map__10856__$1,state,c_search,c_input,state_atom,input_text_model,map__10851,map__10851__$1,args){
return (function (p1__10841_SHARP_){
p1__10841_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__10913,i,s,s__10881__$2,temp__5804__auto__,map__10872,map__10872__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__10862,map__10862__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10856,map__10856__$1,state,c_search,c_input,state_atom,input_text_model,map__10851,map__10851__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__10880(cljs.core.rest(s__10881__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__11140 = function (var_args){
var p__10861 = null;
if (arguments.length > 0) {
var G__11167__i = 0, G__11167__a = new Array(arguments.length -  0);
while (G__11167__i < G__11167__a.length) {G__11167__a[G__11167__i] = arguments[G__11167__i + 0]; ++G__11167__i;}
  p__10861 = new cljs.core.IndexedSeq(G__11167__a,0,null);
} 
return G__11140__delegate.call(this,p__10861);};
G__11140.cljs$lang$maxFixedArity = 0;
G__11140.cljs$lang$applyTo = (function (arglist__11170){
var p__10861 = cljs.core.seq(arglist__11170);
return G__11140__delegate(p__10861);
});
G__11140.cljs$core$IFn$_invoke$arity$variadic = G__11140__delegate;
return G__11140;
})()
;
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq10843){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10843));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__10281__auto___11175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10282__auto__ = (function (){var switch__10193__auto__ = (function (state_11001){
var state_val_11002 = (state_11001[(1)]);
if((state_val_11002 === (7))){
var inst_10946 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11005_11177 = state_11001__$1;
(statearr_11005_11177[(2)] = inst_10946);

(statearr_11005_11177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (1))){
var inst_10936 = null;
var state_11001__$1 = (function (){var statearr_11006 = state_11001;
(statearr_11006[(7)] = inst_10936);

return statearr_11006;
})();
var statearr_11007_11178 = state_11001__$1;
(statearr_11007_11178[(2)] = null);

(statearr_11007_11178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (4))){
var state_11001__$1 = state_11001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11001__$1,(7),in$);
} else {
if((state_val_11002 === (15))){
var inst_10984 = (state_11001[(2)]);
var state_11001__$1 = (function (){var statearr_11013 = state_11001;
(statearr_11013[(8)] = inst_10984);

return statearr_11013;
})();
var statearr_11014_11183 = state_11001__$1;
(statearr_11014_11183[(2)] = null);

(statearr_11014_11183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (13))){
var inst_10971 = (state_11001[(9)]);
var inst_10986 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10971,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_11001__$1 = state_11001;
if(inst_10986){
var statearr_11016_11184 = state_11001__$1;
(statearr_11016_11184[(1)] = (16));

} else {
var statearr_11017_11185 = state_11001__$1;
(statearr_11017_11185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (6))){
var inst_10962 = (state_11001[(10)]);
var inst_10950 = (state_11001[(11)]);
var inst_10949 = (state_11001[(2)]);
var inst_10950__$1 = cljs.core.async.timeout(ms);
var inst_10962__$1 = in$;
var inst_10963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10964 = [inst_10962__$1,inst_10950__$1];
var inst_10965 = (new cljs.core.PersistentVector(null,2,(5),inst_10963,inst_10964,null));
var state_11001__$1 = (function (){var statearr_11018 = state_11001;
(statearr_11018[(10)] = inst_10962__$1);

(statearr_11018[(12)] = inst_10949);

(statearr_11018[(11)] = inst_10950__$1);

return statearr_11018;
})();
return cljs.core.async.ioc_alts_BANG_(state_11001__$1,(8),inst_10965);
} else {
if((state_val_11002 === (17))){
var state_11001__$1 = state_11001;
var statearr_11019_11194 = state_11001__$1;
(statearr_11019_11194[(2)] = null);

(statearr_11019_11194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (3))){
var inst_10997 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11001__$1,inst_10997);
} else {
if((state_val_11002 === (12))){
var inst_10949 = (state_11001[(12)]);
var state_11001__$1 = state_11001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11001__$1,(15),out,inst_10949);
} else {
if((state_val_11002 === (2))){
var inst_10936 = (state_11001[(7)]);
var inst_10939 = (inst_10936 == null);
var state_11001__$1 = state_11001;
if(cljs.core.truth_(inst_10939)){
var statearr_11022_11196 = state_11001__$1;
(statearr_11022_11196[(1)] = (4));

} else {
var statearr_11023_11197 = state_11001__$1;
(statearr_11023_11197[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (11))){
var inst_10994 = (state_11001[(2)]);
var inst_10936 = inst_10994;
var state_11001__$1 = (function (){var statearr_11024 = state_11001;
(statearr_11024[(7)] = inst_10936);

return statearr_11024;
})();
var statearr_11025_11200 = state_11001__$1;
(statearr_11025_11200[(2)] = null);

(statearr_11025_11200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (9))){
var inst_10967 = (state_11001[(13)]);
var inst_10978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10967,(0),null);
var inst_10979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10967,(1),null);
var state_11001__$1 = (function (){var statearr_11027 = state_11001;
(statearr_11027[(14)] = inst_10979);

return statearr_11027;
})();
var statearr_11029_11202 = state_11001__$1;
(statearr_11029_11202[(2)] = inst_10978);

(statearr_11029_11202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (5))){
var inst_10936 = (state_11001[(7)]);
var state_11001__$1 = state_11001;
var statearr_11031_11203 = state_11001__$1;
(statearr_11031_11203[(2)] = inst_10936);

(statearr_11031_11203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (14))){
var inst_10992 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11035_11204 = state_11001__$1;
(statearr_11035_11204[(2)] = inst_10992);

(statearr_11035_11204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (16))){
var inst_10970 = (state_11001[(15)]);
var state_11001__$1 = state_11001;
var statearr_11039_11205 = state_11001__$1;
(statearr_11039_11205[(2)] = inst_10970);

(statearr_11039_11205[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (10))){
var inst_10950 = (state_11001[(11)]);
var inst_10971 = (state_11001[(9)]);
var inst_10981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10971,inst_10950);
var state_11001__$1 = state_11001;
if(inst_10981){
var statearr_11040_11208 = state_11001__$1;
(statearr_11040_11208[(1)] = (12));

} else {
var statearr_11041_11209 = state_11001__$1;
(statearr_11041_11209[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (18))){
var inst_10990 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11042_11214 = state_11001__$1;
(statearr_11042_11214[(2)] = inst_10990);

(statearr_11042_11214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (8))){
var inst_10967 = (state_11001[(13)]);
var inst_10962 = (state_11001[(10)]);
var inst_10971 = (state_11001[(9)]);
var inst_10967__$1 = (state_11001[(2)]);
var inst_10970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10967__$1,(0),null);
var inst_10971__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10967__$1,(1),null);
var inst_10973 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10971__$1,inst_10962);
var state_11001__$1 = (function (){var statearr_11043 = state_11001;
(statearr_11043[(13)] = inst_10967__$1);

(statearr_11043[(9)] = inst_10971__$1);

(statearr_11043[(15)] = inst_10970);

return statearr_11043;
})();
if(inst_10973){
var statearr_11044_11215 = state_11001__$1;
(statearr_11044_11215[(1)] = (9));

} else {
var statearr_11046_11216 = state_11001__$1;
(statearr_11046_11216[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__10194__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__10194__auto____0 = (function (){
var statearr_11047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11047[(0)] = re_com$typeahead$debounce_$_state_machine__10194__auto__);

(statearr_11047[(1)] = (1));

return statearr_11047;
});
var re_com$typeahead$debounce_$_state_machine__10194__auto____1 = (function (state_11001){
while(true){
var ret_value__10195__auto__ = (function (){try{while(true){
var result__10196__auto__ = switch__10193__auto__(state_11001);
if(cljs.core.keyword_identical_QMARK_(result__10196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10196__auto__;
}
break;
}
}catch (e11048){var ex__10197__auto__ = e11048;
var statearr_11049_11217 = state_11001;
(statearr_11049_11217[(2)] = ex__10197__auto__);


if(cljs.core.seq((state_11001[(4)]))){
var statearr_11050_11218 = state_11001;
(statearr_11050_11218[(1)] = cljs.core.first((state_11001[(4)])));

} else {
throw ex__10197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11219 = state_11001;
state_11001 = G__11219;
continue;
} else {
return ret_value__10195__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__10194__auto__ = function(state_11001){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__10194__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__10194__auto____1.call(this,state_11001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__10194__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__10194__auto____0;
re_com$typeahead$debounce_$_state_machine__10194__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__10194__auto____1;
return re_com$typeahead$debounce_$_state_machine__10194__auto__;
})()
})();
var state__10283__auto__ = (function (){var statearr_11053 = f__10282__auto__();
(statearr_11053[(6)] = c__10281__auto___11175);

return statearr_11053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10283__auto__);
}));


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
