goog.provide('catan_board.custom_editor.events');
/**
 * Middleware to persist the database to local storage after an event
 */
catan_board.custom_editor.events.persist_db = catan_board.middleware.local_storage.persist_db_after.cljs$core$IFn$_invoke$arity$1("app-db");
/**
 * Default draft structure with base game defaults
 */
catan_board.custom_editor.events.default_draft = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fog-distribution","fog-distribution",792585602),new cljs.core.Keyword(null,"player-count","player-count",-1323180409),new cljs.core.Keyword(null,"hex-types","hex-types",-1144901913),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"grid-pattern","grid-pattern",-1763214640),new cljs.core.Keyword(null,"custom-scenario?","custom-scenario?",-1855989644),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"harbors","harbors",1522363032),new cljs.core.Keyword(null,"face-up-distribution","face-up-distribution",1522439387)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"water","water",-824098213),(0),new cljs.core.Keyword(null,"desert","desert",-559764082),(0),new cljs.core.Keyword(null,"gold","gold",-806826416),(0),new cljs.core.Keyword(null,"wheat","wheat",783520466),(0),new cljs.core.Keyword(null,"brick","brick",895065736),(0),new cljs.core.Keyword(null,"ore","ore",-1419191389),(0),new cljs.core.Keyword(null,"sheep","sheep",-1409901353),(0),new cljs.core.Keyword(null,"wood","wood",149241168),(0)], null),new cljs.core.Keyword(null,"number-tokens","number-tokens",-158048886),cljs.core.PersistentHashMap.fromArrays([(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],[(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)]),new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"on-reveal","on-reveal",1922397129)], null),(4),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"water","water",-824098213),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"terrain","terrain",704966005),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"fog","fog",1515389980),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"village","village",-950412200),cljs.core.PersistentHashSet.EMPTY], null),"","3-4-5-4-3",true,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"water","water",-824098213),(0),new cljs.core.Keyword(null,"desert","desert",-559764082),(0),new cljs.core.Keyword(null,"gold","gold",-806826416),(0),new cljs.core.Keyword(null,"wheat","wheat",783520466),(0),new cljs.core.Keyword(null,"brick","brick",895065736),(0),new cljs.core.Keyword(null,"ore","ore",-1419191389),(0),new cljs.core.Keyword(null,"sheep","sheep",-1409901353),(0),new cljs.core.Keyword(null,"wood","wood",149241168),(0)], null),new cljs.core.Keyword(null,"number-tokens","number-tokens",-158048886),cljs.core.PersistentHashMap.fromArrays([(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],[(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)]),new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"random","random",-557811113)], null)]);
/**
 * Gets the type of a hex from the hex-types structure.
 * hex-types structure: {:water #{coords} :terrain #{coords} :fog #{coords} :village #{coords}}
 * Returns the type keyword (:water/:terrain/:fog/:village) or nil if not found.
 */
catan_board.custom_editor.events.get_hex_type = (function catan_board$custom_editor$events$get_hex_type(hex_types,coord){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"water","water",-824098213).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"water","water",-824098213);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"fog","fog",1515389980).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"fog","fog",1515389980);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"village","village",-950412200).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"village","village",-950412200);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"terrain","terrain",704966005).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"terrain","terrain",704966005);
} else {
return null;

}
}
}
}
});
/**
 * Adds a coordinate to the appropriate type set in hex-types.
 * Removes the coord from all other type sets first to ensure uniqueness.
 */
catan_board.custom_editor.events.add_hex_to_type = (function catan_board$custom_editor$events$add_hex_to_type(hex_types,coord,new_type){
var cleaned = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,type_key){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,type_key,cljs.core.disj,coord);
}),hex_types,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"fog","fog",1515389980),new cljs.core.Keyword(null,"village","village",-950412200),new cljs.core.Keyword(null,"terrain","terrain",704966005)], null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cleaned,new_type,(function (s){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = s;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),coord);
}));
});
/**
 * Removes a coordinate from all type sets in hex-types.
 */
catan_board.custom_editor.events.remove_hex_from_all_types = (function catan_board$custom_editor$events$remove_hex_from_all_types(hex_types,coord){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,type_key){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,type_key,cljs.core.disj,coord);
}),hex_types,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"fog","fog",1515389980),new cljs.core.Keyword(null,"village","village",-950412200),new cljs.core.Keyword(null,"terrain","terrain",704966005)], null));
});
/**
 * Generate a kebab-case keyword ID from a scenario name.
 * Handles duplicates by appending a number.
 */
catan_board.custom_editor.events.generate_scenario_id = (function catan_board$custom_editor$events$generate_scenario_id(name){
var base_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.replace(clojure.string.lower_case(name),/[^a-z0-9\s-]/,""),/\s+/,"-"));
var existing_scenarios = catan_board.middleware.local_storage.load_from_local_storage.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"custom-scenarios","custom-scenarios",1285667133));
var existing_ids = cljs.core.set(cljs.core.keys(existing_scenarios));
if(cljs.core.contains_QMARK_(existing_ids,base_id)){
var n = (2);
while(true){
var numbered_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(base_id) : name.call(null,base_id))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core.contains_QMARK_(existing_ids,numbered_id)){
var G__36103 = (n + (1));
n = G__36103;
continue;
} else {
return numbered_id;
}
break;
}
} else {
return base_id;
}
});
/**
 * Count the number of terrain hexes (excludes water, fog, and village) from hex-types map.
 * hex-types structure: {:water #{coords} :terrain #{coords} :fog #{coords} :village #{coords}}
 */
catan_board.custom_editor.events.count_terrain_hexes = (function catan_board$custom_editor$events$count_terrain_hexes(hex_types){
return cljs.core.count(new cljs.core.Keyword(null,"terrain","terrain",704966005).cljs$core$IFn$_invoke$arity$1(hex_types));
});
/**
 * Validate a scenario draft and return a map of validation errors.
 * Returns empty map if valid.
 */
catan_board.custom_editor.events.validate_draft = (function catan_board$custom_editor$events$validate_draft(draft){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var map__35964 = draft;
var map__35964__$1 = cljs.core.__destructure_map(map__35964);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35964__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var player_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35964__$1,new cljs.core.Keyword(null,"player-count","player-count",-1323180409));
var grid_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35964__$1,new cljs.core.Keyword(null,"grid-pattern","grid-pattern",-1763214640));
var hex_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35964__$1,new cljs.core.Keyword(null,"hex-types","hex-types",-1144901913));
var face_up_distribution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35964__$1,new cljs.core.Keyword(null,"face-up-distribution","face-up-distribution",1522439387));
var fog_distribution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35964__$1,new cljs.core.Keyword(null,"fog-distribution","fog-distribution",792585602));
var errors__$1 = ((clojure.string.blank_QMARK_(name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,new cljs.core.Keyword(null,"name","name",1843675177),"Scenario name is required"):errors);
var errors__$2 = (((((!(typeof player_count === 'number'))) || ((((player_count < (2))) || ((player_count > (6)))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors__$1,new cljs.core.Keyword(null,"player-count","player-count",-1323180409),"Player count must be between 2 and 6"):errors__$1);
var errors__$3 = ((((clojure.string.blank_QMARK_(grid_pattern)) || (cljs.core.not(cljs.core.re_matches(/^\d+(-\d+)*$/,grid_pattern)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors__$2,new cljs.core.Keyword(null,"grid-pattern","grid-pattern",-1763214640),"Grid pattern is invalid (use format: 3-4-5-4-3)"):errors__$2);
var terrain_count = catan_board.custom_editor.events.count_terrain_hexes(hex_types);
var face_up_resources = new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(face_up_distribution);
var total_resources = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(face_up_resources));
var errors__$4 = (((((terrain_count > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total_resources,terrain_count))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors__$3,new cljs.core.Keyword(null,"resources","resources",1632806811),["Resource distribution mismatch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(terrain_count)," terrain hexes, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_resources)," resources configured"].join('')):errors__$3);
var face_up_tokens = new cljs.core.Keyword(null,"number-tokens","number-tokens",-158048886).cljs$core$IFn$_invoke$arity$1(face_up_distribution);
var total_tokens = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(face_up_tokens));
var desert_count = cljs.core.get.cljs$core$IFn$_invoke$arity$3(face_up_resources,new cljs.core.Keyword(null,"desert","desert",-559764082),(0));
var village_count = cljs.core.get.cljs$core$IFn$_invoke$arity$3(face_up_resources,new cljs.core.Keyword(null,"village","village",-950412200),(0));
var expected_tokens = ((terrain_count - desert_count) - village_count);
var errors__$5 = (((((terrain_count > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total_tokens,expected_tokens))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors__$4,new cljs.core.Keyword(null,"tokens","tokens",-818939304),["Number token count mismatch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_tokens)," expected (terrain minus desert), ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_tokens)," tokens configured"].join('')):errors__$4);
return errors__$5;
});
/**
 * Check if two drafts are different. Used to detect unsaved changes.
 */
catan_board.custom_editor.events.drafts_are_different_QMARK_ = (function catan_board$custom_editor$events$drafts_are_different_QMARK_(draft1,draft2){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(draft1,draft2);
});
/**
 * Check if the current draft has unsaved changes compared to the saved version.
 * Returns true if:
 * - Draft has no ID (never saved)
 * - Draft differs from the saved scenario in local storage
 */
catan_board.custom_editor.events.has_unsaved_changes_QMARK_ = (function catan_board$custom_editor$events$has_unsaved_changes_QMARK_(db){
var draft = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null));
var draft_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(draft);
if(cljs.core.truth_(draft_id)){
var custom_scenarios = catan_board.middleware.local_storage.load_from_local_storage.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"custom-scenarios","custom-scenarios",1285667133));
var saved_version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(custom_scenarios,draft_id);
if(cljs.core.truth_(saved_version)){
return catan_board.custom_editor.events.drafts_are_different_QMARK_(draft,saved_version);
} else {
return true;
}
} else {
return catan_board.custom_editor.events.drafts_are_different_QMARK_(draft,catan_board.custom_editor.events.default_draft);
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-custom-scenario-editor","toggle-custom-scenario-editor",-775717160),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,_){
var editor_mode_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-editor-mode","custom-scenario-editor-mode",-847536203)], null));
var G__35965 = db;
var G__35965__$1 = cljs.core.assoc_in(G__35965,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-editor-mode","custom-scenario-editor-mode",-847536203)], null),cljs.core.not(editor_mode_QMARK_))
;
return cljs.core.assoc_in(G__35965__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null),(cljs.core.truth_(editor_mode_QMARK_)?null:catan_board.custom_editor.events.default_draft));

}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reset-custom-scenario-draft","reset-custom-scenario-draft",-1688086976),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null),catan_board.custom_editor.events.default_draft);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"load-custom-scenario-for-editing","load-custom-scenario-for-editing",-966809068),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__35969){
var vec__35970 = p__35969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35970,(0),null);
var scenario_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35970,(1),null);
var force_load_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35970,(2),null);
if(((cljs.core.not(force_load_QMARK_)) && (catan_board.custom_editor.events.has_unsaved_changes_QMARK_(db)))){
return db;
} else {
var custom_scenarios = catan_board.middleware.local_storage.load_from_local_storage.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"custom-scenarios","custom-scenarios",1285667133));
var scenario_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(custom_scenarios,scenario_id);
if(cljs.core.truth_(scenario_config)){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null),scenario_config);
} else {
return db;
}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-scenario-name","update-scenario-name",617144459),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__35975){
var vec__35976 = p__35975;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35976,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35976,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"name","name",1843675177)], null),new_name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-scenario-player-count","update-scenario-player-count",-322827805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__35980){
var vec__35981 = p__35980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35981,(0),null);
var new_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35981,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"player-count","player-count",-1323180409)], null),parseInt(new_count,(10)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-grid-pattern","update-grid-pattern",323988399),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__35984){
var vec__35985 = p__35984;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35985,(0),null);
var new_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35985,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"grid-pattern","grid-pattern",-1763214640)], null),new_pattern);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-face-up-resource","update-face-up-resource",839205879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__35988){
var vec__35989 = p__35988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35989,(0),null);
var resource_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35989,(1),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35989,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"face-up-distribution","face-up-distribution",1522439387),new cljs.core.Keyword(null,"resources","resources",1632806811),resource_type], null),parseInt(count,(10)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-face-down-resource","update-face-down-resource",-585583305),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__35992){
var vec__35993 = p__35992;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35993,(0),null);
var resource_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35993,(1),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35993,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"fog-distribution","fog-distribution",792585602),new cljs.core.Keyword(null,"resources","resources",1632806811),resource_type], null),parseInt(count,(10)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-face-up-number","update-face-up-number",364870027),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__35996){
var vec__35997 = p__35996;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997,(0),null);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997,(1),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"face-up-distribution","face-up-distribution",1522439387),new cljs.core.Keyword(null,"number-tokens","number-tokens",-158048886),number], null),parseInt(count,(10)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-face-down-number","update-face-down-number",1723284062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__36007){
var vec__36008 = p__36007;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36008,(0),null);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36008,(1),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36008,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"fog-distribution","fog-distribution",792585602),new cljs.core.Keyword(null,"number-tokens","number-tokens",-158048886),number], null),parseInt(count,(10)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-editor-hex-selection-mode","set-editor-hex-selection-mode",-818346020),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__36011){
var vec__36012 = p__36011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36012,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36012,(1),null);
var G__36016 = db;
var G__36016__$1 = cljs.core.assoc_in(G__36016,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editor-hex-selection-mode","editor-hex-selection-mode",869835898)], null),mode)
;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"harbor","harbor",-638543472))){
return cljs.core.assoc_in(G__36016__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"harbor-placement-coord","harbor-placement-coord",-1362481537)], null),null);
} else {
return G__36016__$1;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"assign-hex-type","assign-hex-type",-73552081),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__36020){
var vec__36022 = p__36020;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36022,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36022,(1),null);
var hex_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36022,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"hex-types","hex-types",-1144901913)], null),(function (p1__36018_SHARP_){
return catan_board.custom_editor.events.add_hex_to_type(p1__36018_SHARP_,coord,hex_type);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"clear-hex-assignment","clear-hex-assignment",-374118093),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__36026){
var vec__36027 = p__36026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36027,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36027,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"hex-types","hex-types",-1144901913)], null),(function (p1__36025_SHARP_){
return catan_board.custom_editor.events.remove_hex_from_all_types(p1__36025_SHARP_,coord);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"clear-all-hex-assignments","clear-all-hex-assignments",-1030664923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"hex-types","hex-types",-1144901913)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"water","water",-824098213),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"terrain","terrain",704966005),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"fog","fog",1515389980),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"village","village",-950412200),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"harbors","harbors",1522363032)], null),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"place-harbor-at-hex","place-harbor-at-hex",1316086961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__36030){
var vec__36031 = p__36030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"harbor-placement-coord","harbor-placement-coord",-1362481537)], null),coord);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-harbor-direction","set-harbor-direction",1655338539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__36038){
var vec__36039 = p__36038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36039,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36039,(1),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36039,(2),null);
var new_harbor = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),coord,new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"generic","generic",-1245036524)], null);
var current_harbors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"harbors","harbors",1522363032)], null),cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"harbors","harbors",1522363032)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_harbors,new_harbor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"harbor-placement-coord","harbor-placement-coord",-1362481537)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"assign-harbor-type","assign-harbor-type",331169236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__36046){
var vec__36047 = p__36046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(0),null);
var land_hex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(1),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(2),null);
var new_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(3),null);
var harbors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"harbors","harbors",1522363032)], null),cljs.core.PersistentVector.EMPTY);
var updated_harbors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (harbor){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"land-hex","land-hex",151922960).cljs$core$IFn$_invoke$arity$1(harbor),land_hex)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(harbor),direction)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(harbor,new cljs.core.Keyword(null,"type","type",1174270348),new_type);
} else {
return harbor;
}
}),harbors);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"harbors","harbors",1522363032)], null),updated_harbors);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"remove-harbor","remove-harbor",-1945440553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,p__36058){
var vec__36059 = p__36058;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(0),null);
var land_hex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(1),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(2),null);
var harbors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"harbors","harbors",1522363032)], null),cljs.core.PersistentVector.EMPTY);
var updated_harbors = cljs.core.filterv((function (harbor){
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"land-hex","land-hex",151922960).cljs$core$IFn$_invoke$arity$1(harbor),land_hex)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(harbor),direction)))));
}),harbors);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"harbors","harbors",1522363032)], null),updated_harbors);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"save-custom-scenario","save-custom-scenario",1178851334),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,_){
var draft = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null));
var validation_errors = catan_board.custom_editor.events.validate_draft(draft);
if(cljs.core.empty_QMARK_(validation_errors)){
var scenario_id = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(draft);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return catan_board.custom_editor.events.generate_scenario_id(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(draft));
}
})();
var scenario_to_save = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(draft,new cljs.core.Keyword(null,"id","id",-1388402092),scenario_id);
catan_board.middleware.local_storage.assoc_to_local_storage_array_BANG_(new cljs.core.Keyword(null,"custom-scenarios","custom-scenarios",1285667133),cljs.core.PersistentArrayMap.createAsIfByAssoc([scenario_id,scenario_to_save]));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"id","id",-1388402092)], null),scenario_id);
} else {
return db;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-custom-scenario","export-custom-scenario",562744864),(function (p__36073,_){
var map__36074 = p__36073;
var map__36074__$1 = cljs.core.__destructure_map(map__36074);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36074__$1,new cljs.core.Keyword(null,"db","db",993250759));
var draft = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null));
var scenario_id = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(draft);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return catan_board.custom_editor.events.generate_scenario_id(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(draft));
}
})();
var scenario_to_export = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(draft,new cljs.core.Keyword(null,"id","id",-1388402092),scenario_id);
var edn_string = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scenario_to_export], 0));
if(cljs.core.truth_((function (){var and__5000__auto__ = navigator.clipboard;
if(cljs.core.truth_(and__5000__auto__)){
return navigator.clipboard.writeText;
} else {
return and__5000__auto__;
}
})())){
navigator.clipboard.writeText(edn_string);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"exit-custom-scenario-editor","exit-custom-scenario-editor",-1948151582),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.custom_editor.events.persist_db], null),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-editor-mode","custom-scenario-editor-mode",-847536203)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"harbor-placement-coord","harbor-placement-coord",-1362481537)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editor-hex-selection-mode","editor-hex-selection-mode",869835898)], null),false);
}));

//# sourceMappingURL=catan_board.custom_editor.events.js.map
