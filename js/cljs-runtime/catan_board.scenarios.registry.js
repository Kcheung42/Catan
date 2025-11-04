goog.provide('catan_board.scenarios.registry');
/**
 * Map of scenario IDs to their configuration data.
 */
catan_board.scenarios.registry.scenarios = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-game","base-game",-2144481729),catan_board.scenarios.base_game_4p.base_game_4p,new cljs.core.Keyword(null,"base-game-6p","base-game-6p",-493407125),catan_board.scenarios.base_game_6p.base_game_6p,new cljs.core.Keyword(null,"fog-islands-3p","fog-islands-3p",1517052951),catan_board.scenarios.fog_islands_3p.fog_islands_3p_scenario,new cljs.core.Keyword(null,"fog--islands-4p","fog--islands-4p",-310540114),catan_board.scenarios.fog_islands_4p.fog_islands_4p_scenario], null);
/**
 * Returns the scenario configuration for the given scenario-id, or nil if not found.
 * 
 * Usage:
 *   (get-scenario :fog-islands-3p)  ; Returns fog islands config
 *   (get-scenario :base-game)        ; Returns base game config
 *   (get-scenario :unknown)          ; Returns nil
 */
catan_board.scenarios.registry.get_scenario = (function catan_board$scenarios$registry$get_scenario(scenario_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(catan_board.scenarios.registry.scenarios,scenario_id);
});
/**
 * Returns a list of available scenarios with their ID and name.
 * Useful for populating scenario selection dropdowns.
 * 
 * Returns: [{:id keyword :name string :player-count int} ...]
 * 
 * Example:
 *   [{:id :base-game :name 'Base Game (4-player)' :player-count 4}
 *    {:id :fog-islands-3p :name 'Fog Islands (3-player)' :player-count 3}]
 */
catan_board.scenarios.registry.list_scenarios = (function catan_board$scenarios$registry$list_scenarios(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__25807){
var vec__25808 = p__25807;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25808,(0),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25808,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"player-count","player-count",-1323180409),new cljs.core.Keyword(null,"player-count","player-count",-1323180409).cljs$core$IFn$_invoke$arity$1(config)], null);
}),catan_board.scenarios.registry.scenarios);
});

//# sourceMappingURL=catan_board.scenarios.registry.js.map
