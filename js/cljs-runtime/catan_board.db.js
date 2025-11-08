goog.provide('catan_board.db');
catan_board.db.hex_size = (50);
/**
 * Initial application (state)
 */
catan_board.db.default_db = (function (){var or__5002__auto__ = (((typeof localStorage !== 'undefined'))?catan_board.middleware.local_storage.load_latest_app_db_from_local_storage.cljs$core$IFn$_invoke$arity$0():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var base_game_scenario_config = catan_board.scenarios.registry.get_scenario(new cljs.core.Keyword(null,"base-game","base-game",-2144481729));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scenario","scenario",-316635333),new cljs.core.Keyword(null,"base-game","base-game",-2144481729),new cljs.core.Keyword(null,"board","board",-1907017633),catan_board.utils.board_generator.generate_board(base_game_scenario_config,false,false),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"show-info-panel","show-info-panel",-1339130975),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460),new cljs.core.Keyword(null,"random-harbor-mode","random-harbor-mode",-1277507634),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"developer-mode","developer-mode",-1735611500),new cljs.core.Keyword(null,"tournament-mode","tournament-mode",1600337077),new cljs.core.Keyword(null,"custom-scenario-editor-mode","custom-scenario-editor-mode",-847536203),new cljs.core.Keyword(null,"landscape-mode","landscape-mode",-261736459),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),new cljs.core.Keyword(null,"editor-hex-selection-mode","editor-hex-selection-mode",869835898),new cljs.core.Keyword(null,"swap-number-mode","swap-number-mode",-377880290)],[true,(225),null,false,false,false,false,false,false,null,new cljs.core.Keyword(null,"terrain","terrain",704966005),false])], null);
}
})();

//# sourceMappingURL=catan_board.db.js.map
