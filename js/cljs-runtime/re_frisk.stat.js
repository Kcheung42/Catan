goog.provide('re_frisk.stat');
re_frisk.stat.assoc_map = (function re_frisk$stat$assoc_map(acc,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cnt","cnt",283978798),(0),new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null));
});
re_frisk.stat.get_re_frame_handlers = (function re_frisk$stat$get_re_frame_handlers(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),new cljs.core.Keyword(null,"db","db",993250759)], 0)))),new cljs.core.Keyword(null,"cofx","cofx",2013202907),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"db","db",993250759)))),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)))),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler))))], null);
});
re_frisk.stat.init_stat = (function re_frisk$stat$init_stat(re_frame_data){
if(cljs.core.empty_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data)))){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),re_frisk.stat.get_re_frame_handlers());
} else {
return null;
}
});
re_frisk.stat.update_trace_stat = (function re_frisk$stat$update_trace_stat(re_frame_data,traces){
var seq__11122 = cljs.core.seq(traces);
var chunk__11123 = null;
var count__11124 = (0);
var i__11125 = (0);
while(true){
if((i__11125 < count__11124)){
var map__11286 = chunk__11123.cljs$core$IIndexed$_nth$arity$2(null,i__11125);
var map__11286__$1 = cljs.core.__destructure_map(map__11286);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11286__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11286__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11286__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11286__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11286__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__11291_11363 = cljs.core.seq(cljs.core.keys(effects));
var chunk__11292_11364 = null;
var count__11293_11365 = (0);
var i__11294_11366 = (0);
while(true){
if((i__11294_11366 < count__11293_11365)){
var key_11368 = chunk__11292_11364.cljs$core$IIndexed$_nth$arity$2(null,i__11294_11366);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_11368,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__11370 = seq__11291_11363;
var G__11371 = chunk__11292_11364;
var G__11372 = count__11293_11365;
var G__11373 = (i__11294_11366 + (1));
seq__11291_11363 = G__11370;
chunk__11292_11364 = G__11371;
count__11293_11365 = G__11372;
i__11294_11366 = G__11373;
continue;
} else {
var temp__5804__auto___11374 = cljs.core.seq(seq__11291_11363);
if(temp__5804__auto___11374){
var seq__11291_11375__$1 = temp__5804__auto___11374;
if(cljs.core.chunked_seq_QMARK_(seq__11291_11375__$1)){
var c__5525__auto___11376 = cljs.core.chunk_first(seq__11291_11375__$1);
var G__11377 = cljs.core.chunk_rest(seq__11291_11375__$1);
var G__11378 = c__5525__auto___11376;
var G__11379 = cljs.core.count(c__5525__auto___11376);
var G__11380 = (0);
seq__11291_11363 = G__11377;
chunk__11292_11364 = G__11378;
count__11293_11365 = G__11379;
i__11294_11366 = G__11380;
continue;
} else {
var key_11381 = cljs.core.first(seq__11291_11375__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_11381,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__11384 = cljs.core.next(seq__11291_11375__$1);
var G__11385 = null;
var G__11386 = (0);
var G__11387 = (0);
seq__11291_11363 = G__11384;
chunk__11292_11364 = G__11385;
count__11293_11365 = G__11386;
i__11294_11366 = G__11387;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__11299_11388 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__11300_11389 = null;
var count__11301_11390 = (0);
var i__11302_11391 = (0);
while(true){
if((i__11302_11391 < count__11301_11390)){
var key_11393 = chunk__11300_11389.cljs$core$IIndexed$_nth$arity$2(null,i__11302_11391);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_11393,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__11394 = seq__11299_11388;
var G__11395 = chunk__11300_11389;
var G__11396 = count__11301_11390;
var G__11397 = (i__11302_11391 + (1));
seq__11299_11388 = G__11394;
chunk__11300_11389 = G__11395;
count__11301_11390 = G__11396;
i__11302_11391 = G__11397;
continue;
} else {
var temp__5804__auto___11398 = cljs.core.seq(seq__11299_11388);
if(temp__5804__auto___11398){
var seq__11299_11399__$1 = temp__5804__auto___11398;
if(cljs.core.chunked_seq_QMARK_(seq__11299_11399__$1)){
var c__5525__auto___11400 = cljs.core.chunk_first(seq__11299_11399__$1);
var G__11401 = cljs.core.chunk_rest(seq__11299_11399__$1);
var G__11402 = c__5525__auto___11400;
var G__11403 = cljs.core.count(c__5525__auto___11400);
var G__11404 = (0);
seq__11299_11388 = G__11401;
chunk__11300_11389 = G__11402;
count__11301_11390 = G__11403;
i__11302_11391 = G__11404;
continue;
} else {
var key_11405 = cljs.core.first(seq__11299_11399__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_11405,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__11406 = cljs.core.next(seq__11299_11399__$1);
var G__11407 = null;
var G__11408 = (0);
var G__11409 = (0);
seq__11299_11388 = G__11406;
chunk__11300_11389 = G__11407;
count__11301_11390 = G__11408;
i__11302_11391 = G__11409;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__11303_11410 = cljs.core.seq(subs);
var chunk__11304_11411 = null;
var count__11305_11412 = (0);
var i__11306_11413 = (0);
while(true){
if((i__11306_11413 < count__11305_11412)){
var map__11309_11414 = chunk__11304_11411.cljs$core$IIndexed$_nth$arity$2(null,i__11306_11413);
var map__11309_11415__$1 = cljs.core.__destructure_map(map__11309_11414);
var op_type_11416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11309_11415__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_11417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11309_11415__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_11418__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11309_11415__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_11416,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_11417,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_11417,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_11418__$1], 0));
} else {
}


var G__11419 = seq__11303_11410;
var G__11420 = chunk__11304_11411;
var G__11421 = count__11305_11412;
var G__11422 = (i__11306_11413 + (1));
seq__11303_11410 = G__11419;
chunk__11304_11411 = G__11420;
count__11305_11412 = G__11421;
i__11306_11413 = G__11422;
continue;
} else {
var temp__5804__auto___11423 = cljs.core.seq(seq__11303_11410);
if(temp__5804__auto___11423){
var seq__11303_11424__$1 = temp__5804__auto___11423;
if(cljs.core.chunked_seq_QMARK_(seq__11303_11424__$1)){
var c__5525__auto___11425 = cljs.core.chunk_first(seq__11303_11424__$1);
var G__11426 = cljs.core.chunk_rest(seq__11303_11424__$1);
var G__11427 = c__5525__auto___11425;
var G__11428 = cljs.core.count(c__5525__auto___11425);
var G__11429 = (0);
seq__11303_11410 = G__11426;
chunk__11304_11411 = G__11427;
count__11305_11412 = G__11428;
i__11306_11413 = G__11429;
continue;
} else {
var map__11312_11430 = cljs.core.first(seq__11303_11424__$1);
var map__11312_11431__$1 = cljs.core.__destructure_map(map__11312_11430);
var op_type_11432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11312_11431__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_11433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11312_11431__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_11434__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11312_11431__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_11432,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_11433,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_11433,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_11434__$1], 0));
} else {
}


var G__11436 = cljs.core.next(seq__11303_11424__$1);
var G__11437 = null;
var G__11438 = (0);
var G__11439 = (0);
seq__11303_11410 = G__11436;
chunk__11304_11411 = G__11437;
count__11305_11412 = G__11438;
i__11306_11413 = G__11439;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__11440 = seq__11122;
var G__11441 = chunk__11123;
var G__11442 = count__11124;
var G__11443 = (i__11125 + (1));
seq__11122 = G__11440;
chunk__11123 = G__11441;
count__11124 = G__11442;
i__11125 = G__11443;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11122);
if(temp__5804__auto__){
var seq__11122__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11122__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11122__$1);
var G__11444 = cljs.core.chunk_rest(seq__11122__$1);
var G__11445 = c__5525__auto__;
var G__11446 = cljs.core.count(c__5525__auto__);
var G__11447 = (0);
seq__11122 = G__11444;
chunk__11123 = G__11445;
count__11124 = G__11446;
i__11125 = G__11447;
continue;
} else {
var map__11317 = cljs.core.first(seq__11122__$1);
var map__11317__$1 = cljs.core.__destructure_map(map__11317);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11317__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11317__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11317__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11317__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11317__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__11318_11448 = cljs.core.seq(cljs.core.keys(effects));
var chunk__11319_11449 = null;
var count__11320_11450 = (0);
var i__11321_11451 = (0);
while(true){
if((i__11321_11451 < count__11320_11450)){
var key_11452 = chunk__11319_11449.cljs$core$IIndexed$_nth$arity$2(null,i__11321_11451);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_11452,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__11453 = seq__11318_11448;
var G__11454 = chunk__11319_11449;
var G__11455 = count__11320_11450;
var G__11456 = (i__11321_11451 + (1));
seq__11318_11448 = G__11453;
chunk__11319_11449 = G__11454;
count__11320_11450 = G__11455;
i__11321_11451 = G__11456;
continue;
} else {
var temp__5804__auto___11457__$1 = cljs.core.seq(seq__11318_11448);
if(temp__5804__auto___11457__$1){
var seq__11318_11458__$1 = temp__5804__auto___11457__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11318_11458__$1)){
var c__5525__auto___11459 = cljs.core.chunk_first(seq__11318_11458__$1);
var G__11460 = cljs.core.chunk_rest(seq__11318_11458__$1);
var G__11461 = c__5525__auto___11459;
var G__11462 = cljs.core.count(c__5525__auto___11459);
var G__11463 = (0);
seq__11318_11448 = G__11460;
chunk__11319_11449 = G__11461;
count__11320_11450 = G__11462;
i__11321_11451 = G__11463;
continue;
} else {
var key_11464 = cljs.core.first(seq__11318_11458__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_11464,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__11467 = cljs.core.next(seq__11318_11458__$1);
var G__11468 = null;
var G__11469 = (0);
var G__11470 = (0);
seq__11318_11448 = G__11467;
chunk__11319_11449 = G__11468;
count__11320_11450 = G__11469;
i__11321_11451 = G__11470;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__11328_11471 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__11329_11472 = null;
var count__11330_11473 = (0);
var i__11331_11474 = (0);
while(true){
if((i__11331_11474 < count__11330_11473)){
var key_11475 = chunk__11329_11472.cljs$core$IIndexed$_nth$arity$2(null,i__11331_11474);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_11475,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__11476 = seq__11328_11471;
var G__11477 = chunk__11329_11472;
var G__11478 = count__11330_11473;
var G__11479 = (i__11331_11474 + (1));
seq__11328_11471 = G__11476;
chunk__11329_11472 = G__11477;
count__11330_11473 = G__11478;
i__11331_11474 = G__11479;
continue;
} else {
var temp__5804__auto___11480__$1 = cljs.core.seq(seq__11328_11471);
if(temp__5804__auto___11480__$1){
var seq__11328_11481__$1 = temp__5804__auto___11480__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11328_11481__$1)){
var c__5525__auto___11482 = cljs.core.chunk_first(seq__11328_11481__$1);
var G__11483 = cljs.core.chunk_rest(seq__11328_11481__$1);
var G__11484 = c__5525__auto___11482;
var G__11485 = cljs.core.count(c__5525__auto___11482);
var G__11486 = (0);
seq__11328_11471 = G__11483;
chunk__11329_11472 = G__11484;
count__11330_11473 = G__11485;
i__11331_11474 = G__11486;
continue;
} else {
var key_11487 = cljs.core.first(seq__11328_11481__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_11487,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__11488 = cljs.core.next(seq__11328_11481__$1);
var G__11489 = null;
var G__11490 = (0);
var G__11491 = (0);
seq__11328_11471 = G__11488;
chunk__11329_11472 = G__11489;
count__11330_11473 = G__11490;
i__11331_11474 = G__11491;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__11339_11492 = cljs.core.seq(subs);
var chunk__11340_11493 = null;
var count__11341_11494 = (0);
var i__11342_11495 = (0);
while(true){
if((i__11342_11495 < count__11341_11494)){
var map__11350_11496 = chunk__11340_11493.cljs$core$IIndexed$_nth$arity$2(null,i__11342_11495);
var map__11350_11497__$1 = cljs.core.__destructure_map(map__11350_11496);
var op_type_11498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11350_11497__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_11499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11350_11497__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_11500__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11350_11497__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_11498,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_11499,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_11499,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_11500__$1], 0));
} else {
}


var G__11503 = seq__11339_11492;
var G__11504 = chunk__11340_11493;
var G__11505 = count__11341_11494;
var G__11506 = (i__11342_11495 + (1));
seq__11339_11492 = G__11503;
chunk__11340_11493 = G__11504;
count__11341_11494 = G__11505;
i__11342_11495 = G__11506;
continue;
} else {
var temp__5804__auto___11507__$1 = cljs.core.seq(seq__11339_11492);
if(temp__5804__auto___11507__$1){
var seq__11339_11508__$1 = temp__5804__auto___11507__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11339_11508__$1)){
var c__5525__auto___11509 = cljs.core.chunk_first(seq__11339_11508__$1);
var G__11510 = cljs.core.chunk_rest(seq__11339_11508__$1);
var G__11511 = c__5525__auto___11509;
var G__11512 = cljs.core.count(c__5525__auto___11509);
var G__11513 = (0);
seq__11339_11492 = G__11510;
chunk__11340_11493 = G__11511;
count__11341_11494 = G__11512;
i__11342_11495 = G__11513;
continue;
} else {
var map__11354_11514 = cljs.core.first(seq__11339_11508__$1);
var map__11354_11515__$1 = cljs.core.__destructure_map(map__11354_11514);
var op_type_11516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11354_11515__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_11517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11354_11515__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_11518__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11354_11515__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_11516,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_11517,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_11517,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_11518__$1], 0));
} else {
}


var G__11519 = cljs.core.next(seq__11339_11508__$1);
var G__11520 = null;
var G__11521 = (0);
var G__11522 = (0);
seq__11339_11492 = G__11519;
chunk__11340_11493 = G__11520;
count__11341_11494 = G__11521;
i__11342_11495 = G__11522;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__11523 = cljs.core.next(seq__11122__$1);
var G__11524 = null;
var G__11525 = (0);
var G__11526 = (0);
seq__11122 = G__11523;
chunk__11123 = G__11524;
count__11124 = G__11525;
i__11125 = G__11526;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frisk.stat.update_event_stat = (function re_frisk$stat$update_event_stat(re_frame_data,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);
});

//# sourceMappingURL=re_frisk.stat.js.map
