goog.provide('catan_board.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"db","db",993250759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return db;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"hexes","hexes",-1419989846),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),(function (db,_){
return new cljs.core.Keyword(null,"hexes","hexes",-1419989846).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"harbors","harbors",1522363032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),(function (db,_){
return new cljs.core.Keyword(null,"harbors","harbors",1522363032).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fog-state-hexes","fog-state-hexes",1162261524),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),(function (board,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fog-number-deck","fog-number-deck",-860138420),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),(function (board,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-scenario","current-scenario",387065885),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"scenario","scenario",-316635333).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"available-scenarios","available-scenarios",1891935930),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return catan_board.scenarios.registry.list_scenarios();
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-info-panel?","show-info-panel?",1687638256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),(function (db,_){
return new cljs.core.Keyword(null,"show-info-panel","show-info-panel",-1339130975).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),(function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$2(db,false);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"board-scale","board-scale",1828785798),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),(function (db,_){
return new cljs.core.Keyword(null,"board-scale","board-scale",1828785798).cljs$core$IFn$_invoke$arity$2(db,(100));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tournament-mode?","tournament-mode?",1595196011),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),(function (db,_){
return new cljs.core.Keyword(null,"tournament-mode","tournament-mode",1600337077).cljs$core$IFn$_invoke$arity$2(db,false);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"swap-number-mode?","swap-number-mode?",-906147176),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),(function (db,_){
return new cljs.core.Keyword(null,"swap-number-mode","swap-number-mode",-377880290).cljs$core$IFn$_invoke$arity$2(db,false);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),(function (db,_){
return new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"developer-mode?","developer-mode?",-664498178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),(function (db,_){
return new cljs.core.Keyword(null,"developer-mode","developer-mode",-1735611500).cljs$core$IFn$_invoke$arity$2(db,false);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"landscape-mode?","landscape-mode?",1839338284),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),(function (db,_){
return new cljs.core.Keyword(null,"landscape-mode","landscape-mode",-261736459).cljs$core$IFn$_invoke$arity$2(db,false);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"random-harbor-mode?","random-harbor-mode?",1753781411),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),(function (db,_){
return new cljs.core.Keyword(null,"random-harbor-mode","random-harbor-mode",-1277507634).cljs$core$IFn$_invoke$arity$2(db,false);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"resource-counts","resource-counts",-329216889),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null),(function (hexes,_){
return cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resource","resource",251898836),hexes));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"number-counts","number-counts",712939135),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null),(function (hexes,_){
return cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23810_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desert","desert",-559764082),new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(p1__23810_SHARP_));
}),hexes)));
})], 0));

//# sourceMappingURL=catan_board.subs.js.map
