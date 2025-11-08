goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.reaction__GT_operation !== 'undefined')){
} else {
re_frisk.subs_graph.reaction__GT_operation = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.view__GT_reactions !== 'undefined')){
} else {
re_frisk.subs_graph.view__GT_reactions = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"app-db",new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction,"app-db");

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5804__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5804__auto__)){
var network_js = temp__5804__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__5000__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5804__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5804__auto__)){
var container = temp__5804__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5804__auto___8832 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5804__auto___8832)){
var app_db_reaction_8833 = temp__5804__auto___8832;
re_frisk.subs_graph.set_root_node(app_db_reaction_8833);
} else {
}

var seq__7684_8834 = cljs.core.seq(traces);
var chunk__7685_8835 = null;
var count__7686_8836 = (0);
var i__7687_8837 = (0);
while(true){
if((i__7687_8837 < count__7686_8836)){
var map__7742_8838 = chunk__7685_8835.cljs$core$IIndexed$_nth$arity$2(null,i__7687_8837);
var map__7742_8839__$1 = cljs.core.__destructure_map(map__7742_8838);
var subs_8840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7742_8839__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__7745_8841 = cljs.core.seq(subs_8840);
var chunk__7746_8842 = null;
var count__7747_8843 = (0);
var i__7748_8844 = (0);
while(true){
if((i__7748_8844 < count__7747_8843)){
var map__7760_8845 = chunk__7746_8842.cljs$core$IIndexed$_nth$arity$2(null,i__7748_8844);
var map__7760_8846__$1 = cljs.core.__destructure_map(map__7760_8845);
var operation_8847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7760_8846__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_8848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7760_8846__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_8848)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_8848,operation_8847);
} else {
}


var G__8850 = seq__7745_8841;
var G__8851 = chunk__7746_8842;
var G__8852 = count__7747_8843;
var G__8853 = (i__7748_8844 + (1));
seq__7745_8841 = G__8850;
chunk__7746_8842 = G__8851;
count__7747_8843 = G__8852;
i__7748_8844 = G__8853;
continue;
} else {
var temp__5804__auto___8854 = cljs.core.seq(seq__7745_8841);
if(temp__5804__auto___8854){
var seq__7745_8855__$1 = temp__5804__auto___8854;
if(cljs.core.chunked_seq_QMARK_(seq__7745_8855__$1)){
var c__5525__auto___8856 = cljs.core.chunk_first(seq__7745_8855__$1);
var G__8858 = cljs.core.chunk_rest(seq__7745_8855__$1);
var G__8859 = c__5525__auto___8856;
var G__8860 = cljs.core.count(c__5525__auto___8856);
var G__8861 = (0);
seq__7745_8841 = G__8858;
chunk__7746_8842 = G__8859;
count__7747_8843 = G__8860;
i__7748_8844 = G__8861;
continue;
} else {
var map__7771_8862 = cljs.core.first(seq__7745_8855__$1);
var map__7771_8863__$1 = cljs.core.__destructure_map(map__7771_8862);
var operation_8864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7771_8863__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_8865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7771_8863__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_8865)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_8865,operation_8864);
} else {
}


var G__8867 = cljs.core.next(seq__7745_8855__$1);
var G__8868 = null;
var G__8869 = (0);
var G__8870 = (0);
seq__7745_8841 = G__8867;
chunk__7746_8842 = G__8868;
count__7747_8843 = G__8869;
i__7748_8844 = G__8870;
continue;
}
} else {
}
}
break;
}


var G__8871 = seq__7684_8834;
var G__8872 = chunk__7685_8835;
var G__8873 = count__7686_8836;
var G__8874 = (i__7687_8837 + (1));
seq__7684_8834 = G__8871;
chunk__7685_8835 = G__8872;
count__7686_8836 = G__8873;
i__7687_8837 = G__8874;
continue;
} else {
var temp__5804__auto___8876 = cljs.core.seq(seq__7684_8834);
if(temp__5804__auto___8876){
var seq__7684_8878__$1 = temp__5804__auto___8876;
if(cljs.core.chunked_seq_QMARK_(seq__7684_8878__$1)){
var c__5525__auto___8879 = cljs.core.chunk_first(seq__7684_8878__$1);
var G__8880 = cljs.core.chunk_rest(seq__7684_8878__$1);
var G__8881 = c__5525__auto___8879;
var G__8882 = cljs.core.count(c__5525__auto___8879);
var G__8883 = (0);
seq__7684_8834 = G__8880;
chunk__7685_8835 = G__8881;
count__7686_8836 = G__8882;
i__7687_8837 = G__8883;
continue;
} else {
var map__7778_8885 = cljs.core.first(seq__7684_8878__$1);
var map__7778_8886__$1 = cljs.core.__destructure_map(map__7778_8885);
var subs_8887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7778_8886__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__7779_8888 = cljs.core.seq(subs_8887);
var chunk__7780_8889 = null;
var count__7781_8890 = (0);
var i__7782_8891 = (0);
while(true){
if((i__7782_8891 < count__7781_8890)){
var map__7805_8892 = chunk__7780_8889.cljs$core$IIndexed$_nth$arity$2(null,i__7782_8891);
var map__7805_8893__$1 = cljs.core.__destructure_map(map__7805_8892);
var operation_8894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7805_8893__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_8895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7805_8893__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_8895)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_8895,operation_8894);
} else {
}


var G__8896 = seq__7779_8888;
var G__8897 = chunk__7780_8889;
var G__8898 = count__7781_8890;
var G__8899 = (i__7782_8891 + (1));
seq__7779_8888 = G__8896;
chunk__7780_8889 = G__8897;
count__7781_8890 = G__8898;
i__7782_8891 = G__8899;
continue;
} else {
var temp__5804__auto___8900__$1 = cljs.core.seq(seq__7779_8888);
if(temp__5804__auto___8900__$1){
var seq__7779_8901__$1 = temp__5804__auto___8900__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7779_8901__$1)){
var c__5525__auto___8903 = cljs.core.chunk_first(seq__7779_8901__$1);
var G__8904 = cljs.core.chunk_rest(seq__7779_8901__$1);
var G__8905 = c__5525__auto___8903;
var G__8906 = cljs.core.count(c__5525__auto___8903);
var G__8907 = (0);
seq__7779_8888 = G__8904;
chunk__7780_8889 = G__8905;
count__7781_8890 = G__8906;
i__7782_8891 = G__8907;
continue;
} else {
var map__7814_8908 = cljs.core.first(seq__7779_8901__$1);
var map__7814_8909__$1 = cljs.core.__destructure_map(map__7814_8908);
var operation_8910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7814_8909__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_8911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7814_8909__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_8911)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_8911,operation_8910);
} else {
}


var G__8916 = cljs.core.next(seq__7779_8901__$1);
var G__8917 = null;
var G__8918 = (0);
var G__8919 = (0);
seq__7779_8888 = G__8916;
chunk__7780_8889 = G__8917;
count__7781_8890 = G__8918;
i__7782_8891 = G__8919;
continue;
}
} else {
}
}
break;
}


var G__8923 = cljs.core.next(seq__7684_8878__$1);
var G__8924 = null;
var G__8925 = (0);
var G__8926 = (0);
seq__7684_8834 = G__8923;
chunk__7685_8835 = G__8924;
count__7686_8836 = G__8925;
i__7687_8837 = G__8926;
continue;
}
} else {
}
}
break;
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__7817_8928 = cljs.core.seq(traces);
var chunk__7818_8929 = null;
var count__7819_8930 = (0);
var i__7820_8931 = (0);
while(true){
if((i__7820_8931 < count__7819_8930)){
var map__8133_8932 = chunk__7818_8929.cljs$core$IIndexed$_nth$arity$2(null,i__7820_8931);
var map__8133_8933__$1 = cljs.core.__destructure_map(map__8133_8932);
var subs_8934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8133_8933__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__8134_8935 = cljs.core.seq(subs_8934);
var chunk__8135_8936 = null;
var count__8136_8937 = (0);
var i__8137_8938 = (0);
while(true){
if((i__8137_8938 < count__8136_8937)){
var map__8243_8939 = chunk__8135_8936.cljs$core$IIndexed$_nth$arity$2(null,i__8137_8938);
var map__8243_8940__$1 = cljs.core.__destructure_map(map__8243_8939);
var op_type_8941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8243_8940__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_8942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8243_8940__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_8943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8243_8940__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_8944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8243_8940__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_8941,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_8941,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5000__auto__){
return input_signals_8942;
} else {
return and__5000__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_8943,input_signals_8942);
} else {
}

var operation_8945__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_8943);
if(cljs.core.truth_(reaction_8944)){
var temp__5802__auto___8946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_8945__$1);
if(cljs.core.truth_(temp__5802__auto___8946)){
var old_reaction_8947 = temp__5802__auto___8946;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_8941,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_8947))){
var updated_node_8948 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_8947,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_8941,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_8941)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_8945__$1,updated_node_8948);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_8945__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_8945__$1,updated_node_8948);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_8948], null)));
}
} else {
}
} else {
}
} else {
var data_8952 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_8945__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_8945__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_8941)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_8941], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_8945__$1,data_8952);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_8945__$1,data_8952);
}
} else {
}

if(cljs.core.truth_(input_signals_8942)){
var seq__8268_8954 = cljs.core.seq(input_signals_8942);
var chunk__8269_8955 = null;
var count__8270_8956 = (0);
var i__8271_8957 = (0);
while(true){
if((i__8271_8957 < count__8270_8956)){
var input_reaction_8958 = chunk__8269_8955.cljs$core$IIndexed$_nth$arity$2(null,i__8271_8957);
var input_operation_8960 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_8958));
var reaction_path_8961 = [input_operation_8960,"-",operation_8945__$1].join('');
var temp__5802__auto___8962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_8961);
if(cljs.core.truth_(temp__5802__auto___8962)){
var old_edge_8963 = temp__5802__auto___8962;
var updated_edge_8964 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_8963,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_8961,updated_edge_8964);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_8964], null)));
} else {
}
} else {
var data_8965 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_8961,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_8960,new cljs.core.Keyword(null,"to","to",192099007),operation_8945__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_8961,data_8965);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_8965));
} else {
}
}


var G__8967 = seq__8268_8954;
var G__8968 = chunk__8269_8955;
var G__8969 = count__8270_8956;
var G__8970 = (i__8271_8957 + (1));
seq__8268_8954 = G__8967;
chunk__8269_8955 = G__8968;
count__8270_8956 = G__8969;
i__8271_8957 = G__8970;
continue;
} else {
var temp__5804__auto___8971 = cljs.core.seq(seq__8268_8954);
if(temp__5804__auto___8971){
var seq__8268_8973__$1 = temp__5804__auto___8971;
if(cljs.core.chunked_seq_QMARK_(seq__8268_8973__$1)){
var c__5525__auto___8974 = cljs.core.chunk_first(seq__8268_8973__$1);
var G__8975 = cljs.core.chunk_rest(seq__8268_8973__$1);
var G__8976 = c__5525__auto___8974;
var G__8977 = cljs.core.count(c__5525__auto___8974);
var G__8978 = (0);
seq__8268_8954 = G__8975;
chunk__8269_8955 = G__8976;
count__8270_8956 = G__8977;
i__8271_8957 = G__8978;
continue;
} else {
var input_reaction_8979 = cljs.core.first(seq__8268_8973__$1);
var input_operation_8980 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_8979));
var reaction_path_8981 = [input_operation_8980,"-",operation_8945__$1].join('');
var temp__5802__auto___8982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_8981);
if(cljs.core.truth_(temp__5802__auto___8982)){
var old_edge_8983 = temp__5802__auto___8982;
var updated_edge_8984 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_8983,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_8981,updated_edge_8984);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_8984], null)));
} else {
}
} else {
var data_8985 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_8981,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_8980,new cljs.core.Keyword(null,"to","to",192099007),operation_8945__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_8981,data_8985);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_8985));
} else {
}
}


var G__8988 = cljs.core.next(seq__8268_8973__$1);
var G__8989 = null;
var G__8990 = (0);
var G__8991 = (0);
seq__8268_8954 = G__8988;
chunk__8269_8955 = G__8989;
count__8270_8956 = G__8990;
i__8271_8957 = G__8991;
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


var G__8992 = seq__8134_8935;
var G__8993 = chunk__8135_8936;
var G__8994 = count__8136_8937;
var G__8995 = (i__8137_8938 + (1));
seq__8134_8935 = G__8992;
chunk__8135_8936 = G__8993;
count__8136_8937 = G__8994;
i__8137_8938 = G__8995;
continue;
} else {
var temp__5804__auto___8996 = cljs.core.seq(seq__8134_8935);
if(temp__5804__auto___8996){
var seq__8134_8997__$1 = temp__5804__auto___8996;
if(cljs.core.chunked_seq_QMARK_(seq__8134_8997__$1)){
var c__5525__auto___8998 = cljs.core.chunk_first(seq__8134_8997__$1);
var G__8999 = cljs.core.chunk_rest(seq__8134_8997__$1);
var G__9000 = c__5525__auto___8998;
var G__9001 = cljs.core.count(c__5525__auto___8998);
var G__9002 = (0);
seq__8134_8935 = G__8999;
chunk__8135_8936 = G__9000;
count__8136_8937 = G__9001;
i__8137_8938 = G__9002;
continue;
} else {
var map__8348_9003 = cljs.core.first(seq__8134_8997__$1);
var map__8348_9004__$1 = cljs.core.__destructure_map(map__8348_9003);
var op_type_9005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8348_9004__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_9006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8348_9004__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_9007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8348_9004__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_9008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8348_9004__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9005,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9005,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5000__auto__){
return input_signals_9006;
} else {
return and__5000__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_9007,input_signals_9006);
} else {
}

var operation_9009__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_9007);
if(cljs.core.truth_(reaction_9008)){
var temp__5802__auto___9011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_9009__$1);
if(cljs.core.truth_(temp__5802__auto___9011)){
var old_reaction_9012 = temp__5802__auto___9011;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9005,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_9012))){
var updated_node_9014 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_9012,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_9005,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_9005)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_9009__$1,updated_node_9014);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_9009__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_9009__$1,updated_node_9014);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_9014], null)));
}
} else {
}
} else {
}
} else {
var data_9017 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_9009__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_9009__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_9005)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_9005], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_9009__$1,data_9017);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_9009__$1,data_9017);
}
} else {
}

if(cljs.core.truth_(input_signals_9006)){
var seq__8371_9018 = cljs.core.seq(input_signals_9006);
var chunk__8372_9019 = null;
var count__8373_9020 = (0);
var i__8374_9021 = (0);
while(true){
if((i__8374_9021 < count__8373_9020)){
var input_reaction_9022 = chunk__8372_9019.cljs$core$IIndexed$_nth$arity$2(null,i__8374_9021);
var input_operation_9023 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_9022));
var reaction_path_9024 = [input_operation_9023,"-",operation_9009__$1].join('');
var temp__5802__auto___9025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_9024);
if(cljs.core.truth_(temp__5802__auto___9025)){
var old_edge_9026 = temp__5802__auto___9025;
var updated_edge_9028 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_9026,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9024,updated_edge_9028);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_9028], null)));
} else {
}
} else {
var data_9030 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_9024,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_9023,new cljs.core.Keyword(null,"to","to",192099007),operation_9009__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9024,data_9030);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_9030));
} else {
}
}


var G__9038 = seq__8371_9018;
var G__9039 = chunk__8372_9019;
var G__9040 = count__8373_9020;
var G__9041 = (i__8374_9021 + (1));
seq__8371_9018 = G__9038;
chunk__8372_9019 = G__9039;
count__8373_9020 = G__9040;
i__8374_9021 = G__9041;
continue;
} else {
var temp__5804__auto___9042__$1 = cljs.core.seq(seq__8371_9018);
if(temp__5804__auto___9042__$1){
var seq__8371_9043__$1 = temp__5804__auto___9042__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8371_9043__$1)){
var c__5525__auto___9044 = cljs.core.chunk_first(seq__8371_9043__$1);
var G__9045 = cljs.core.chunk_rest(seq__8371_9043__$1);
var G__9046 = c__5525__auto___9044;
var G__9047 = cljs.core.count(c__5525__auto___9044);
var G__9048 = (0);
seq__8371_9018 = G__9045;
chunk__8372_9019 = G__9046;
count__8373_9020 = G__9047;
i__8374_9021 = G__9048;
continue;
} else {
var input_reaction_9049 = cljs.core.first(seq__8371_9043__$1);
var input_operation_9050 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_9049));
var reaction_path_9051 = [input_operation_9050,"-",operation_9009__$1].join('');
var temp__5802__auto___9052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_9051);
if(cljs.core.truth_(temp__5802__auto___9052)){
var old_edge_9053 = temp__5802__auto___9052;
var updated_edge_9054 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_9053,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9051,updated_edge_9054);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_9054], null)));
} else {
}
} else {
var data_9055 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_9051,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_9050,new cljs.core.Keyword(null,"to","to",192099007),operation_9009__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9051,data_9055);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_9055));
} else {
}
}


var G__9056 = cljs.core.next(seq__8371_9043__$1);
var G__9057 = null;
var G__9058 = (0);
var G__9059 = (0);
seq__8371_9018 = G__9056;
chunk__8372_9019 = G__9057;
count__8373_9020 = G__9058;
i__8374_9021 = G__9059;
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


var G__9061 = cljs.core.next(seq__8134_8997__$1);
var G__9062 = null;
var G__9063 = (0);
var G__9064 = (0);
seq__8134_8935 = G__9061;
chunk__8135_8936 = G__9062;
count__8136_8937 = G__9063;
i__8137_8938 = G__9064;
continue;
}
} else {
}
}
break;
}


var G__9065 = seq__7817_8928;
var G__9066 = chunk__7818_8929;
var G__9067 = count__7819_8930;
var G__9068 = (i__7820_8931 + (1));
seq__7817_8928 = G__9065;
chunk__7818_8929 = G__9066;
count__7819_8930 = G__9067;
i__7820_8931 = G__9068;
continue;
} else {
var temp__5804__auto___9069 = cljs.core.seq(seq__7817_8928);
if(temp__5804__auto___9069){
var seq__7817_9070__$1 = temp__5804__auto___9069;
if(cljs.core.chunked_seq_QMARK_(seq__7817_9070__$1)){
var c__5525__auto___9072 = cljs.core.chunk_first(seq__7817_9070__$1);
var G__9073 = cljs.core.chunk_rest(seq__7817_9070__$1);
var G__9074 = c__5525__auto___9072;
var G__9075 = cljs.core.count(c__5525__auto___9072);
var G__9076 = (0);
seq__7817_8928 = G__9073;
chunk__7818_8929 = G__9074;
count__7819_8930 = G__9075;
i__7820_8931 = G__9076;
continue;
} else {
var map__8460_9077 = cljs.core.first(seq__7817_9070__$1);
var map__8460_9078__$1 = cljs.core.__destructure_map(map__8460_9077);
var subs_9079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8460_9078__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__8463_9080 = cljs.core.seq(subs_9079);
var chunk__8464_9081 = null;
var count__8465_9082 = (0);
var i__8466_9083 = (0);
while(true){
if((i__8466_9083 < count__8465_9082)){
var map__8629_9084 = chunk__8464_9081.cljs$core$IIndexed$_nth$arity$2(null,i__8466_9083);
var map__8629_9085__$1 = cljs.core.__destructure_map(map__8629_9084);
var op_type_9086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8629_9085__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_9087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8629_9085__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_9088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8629_9085__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_9089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8629_9085__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9086,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9086,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5000__auto__){
return input_signals_9087;
} else {
return and__5000__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_9088,input_signals_9087);
} else {
}

var operation_9092__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_9088);
if(cljs.core.truth_(reaction_9089)){
var temp__5802__auto___9093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_9092__$1);
if(cljs.core.truth_(temp__5802__auto___9093)){
var old_reaction_9094 = temp__5802__auto___9093;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9086,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_9094))){
var updated_node_9095 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_9094,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_9086,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_9086)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_9092__$1,updated_node_9095);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_9092__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_9092__$1,updated_node_9095);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_9095], null)));
}
} else {
}
} else {
}
} else {
var data_9097 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_9092__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_9092__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_9086)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_9086], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_9092__$1,data_9097);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_9092__$1,data_9097);
}
} else {
}

if(cljs.core.truth_(input_signals_9087)){
var seq__8637_9098 = cljs.core.seq(input_signals_9087);
var chunk__8638_9099 = null;
var count__8639_9100 = (0);
var i__8640_9101 = (0);
while(true){
if((i__8640_9101 < count__8639_9100)){
var input_reaction_9102 = chunk__8638_9099.cljs$core$IIndexed$_nth$arity$2(null,i__8640_9101);
var input_operation_9103 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_9102));
var reaction_path_9104 = [input_operation_9103,"-",operation_9092__$1].join('');
var temp__5802__auto___9105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_9104);
if(cljs.core.truth_(temp__5802__auto___9105)){
var old_edge_9107 = temp__5802__auto___9105;
var updated_edge_9108 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_9107,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9104,updated_edge_9108);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_9108], null)));
} else {
}
} else {
var data_9109 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_9104,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_9103,new cljs.core.Keyword(null,"to","to",192099007),operation_9092__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9104,data_9109);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_9109));
} else {
}
}


var G__9111 = seq__8637_9098;
var G__9112 = chunk__8638_9099;
var G__9113 = count__8639_9100;
var G__9114 = (i__8640_9101 + (1));
seq__8637_9098 = G__9111;
chunk__8638_9099 = G__9112;
count__8639_9100 = G__9113;
i__8640_9101 = G__9114;
continue;
} else {
var temp__5804__auto___9115__$1 = cljs.core.seq(seq__8637_9098);
if(temp__5804__auto___9115__$1){
var seq__8637_9116__$1 = temp__5804__auto___9115__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8637_9116__$1)){
var c__5525__auto___9117 = cljs.core.chunk_first(seq__8637_9116__$1);
var G__9118 = cljs.core.chunk_rest(seq__8637_9116__$1);
var G__9119 = c__5525__auto___9117;
var G__9120 = cljs.core.count(c__5525__auto___9117);
var G__9121 = (0);
seq__8637_9098 = G__9118;
chunk__8638_9099 = G__9119;
count__8639_9100 = G__9120;
i__8640_9101 = G__9121;
continue;
} else {
var input_reaction_9122 = cljs.core.first(seq__8637_9116__$1);
var input_operation_9123 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_9122));
var reaction_path_9124 = [input_operation_9123,"-",operation_9092__$1].join('');
var temp__5802__auto___9125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_9124);
if(cljs.core.truth_(temp__5802__auto___9125)){
var old_edge_9126 = temp__5802__auto___9125;
var updated_edge_9127 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_9126,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9124,updated_edge_9127);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_9127], null)));
} else {
}
} else {
var data_9128 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_9124,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_9123,new cljs.core.Keyword(null,"to","to",192099007),operation_9092__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9124,data_9128);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_9128));
} else {
}
}


var G__9129 = cljs.core.next(seq__8637_9116__$1);
var G__9130 = null;
var G__9131 = (0);
var G__9132 = (0);
seq__8637_9098 = G__9129;
chunk__8638_9099 = G__9130;
count__8639_9100 = G__9131;
i__8640_9101 = G__9132;
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


var G__9133 = seq__8463_9080;
var G__9134 = chunk__8464_9081;
var G__9135 = count__8465_9082;
var G__9136 = (i__8466_9083 + (1));
seq__8463_9080 = G__9133;
chunk__8464_9081 = G__9134;
count__8465_9082 = G__9135;
i__8466_9083 = G__9136;
continue;
} else {
var temp__5804__auto___9139__$1 = cljs.core.seq(seq__8463_9080);
if(temp__5804__auto___9139__$1){
var seq__8463_9140__$1 = temp__5804__auto___9139__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8463_9140__$1)){
var c__5525__auto___9141 = cljs.core.chunk_first(seq__8463_9140__$1);
var G__9142 = cljs.core.chunk_rest(seq__8463_9140__$1);
var G__9143 = c__5525__auto___9141;
var G__9144 = cljs.core.count(c__5525__auto___9141);
var G__9145 = (0);
seq__8463_9080 = G__9142;
chunk__8464_9081 = G__9143;
count__8465_9082 = G__9144;
i__8466_9083 = G__9145;
continue;
} else {
var map__8680_9146 = cljs.core.first(seq__8463_9140__$1);
var map__8680_9147__$1 = cljs.core.__destructure_map(map__8680_9146);
var op_type_9148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8680_9147__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_9149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8680_9147__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_9150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8680_9147__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_9151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8680_9147__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9148,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9148,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5000__auto__){
return input_signals_9149;
} else {
return and__5000__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_9150,input_signals_9149);
} else {
}

var operation_9152__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_9150);
if(cljs.core.truth_(reaction_9151)){
var temp__5802__auto___9153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_9152__$1);
if(cljs.core.truth_(temp__5802__auto___9153)){
var old_reaction_9154 = temp__5802__auto___9153;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9148,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_9154))){
var updated_node_9155 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_9154,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_9148,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_9148)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_9152__$1,updated_node_9155);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_9152__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_9152__$1,updated_node_9155);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_9155], null)));
}
} else {
}
} else {
}
} else {
var data_9156 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_9152__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_9152__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_9148)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_9148], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_9152__$1,data_9156);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_9152__$1,data_9156);
}
} else {
}

if(cljs.core.truth_(input_signals_9149)){
var seq__8688_9157 = cljs.core.seq(input_signals_9149);
var chunk__8689_9158 = null;
var count__8690_9159 = (0);
var i__8691_9160 = (0);
while(true){
if((i__8691_9160 < count__8690_9159)){
var input_reaction_9161 = chunk__8689_9158.cljs$core$IIndexed$_nth$arity$2(null,i__8691_9160);
var input_operation_9162 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_9161));
var reaction_path_9163 = [input_operation_9162,"-",operation_9152__$1].join('');
var temp__5802__auto___9165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_9163);
if(cljs.core.truth_(temp__5802__auto___9165)){
var old_edge_9166 = temp__5802__auto___9165;
var updated_edge_9167 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_9166,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9163,updated_edge_9167);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_9167], null)));
} else {
}
} else {
var data_9168 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_9163,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_9162,new cljs.core.Keyword(null,"to","to",192099007),operation_9152__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9163,data_9168);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_9168));
} else {
}
}


var G__9171 = seq__8688_9157;
var G__9172 = chunk__8689_9158;
var G__9173 = count__8690_9159;
var G__9174 = (i__8691_9160 + (1));
seq__8688_9157 = G__9171;
chunk__8689_9158 = G__9172;
count__8690_9159 = G__9173;
i__8691_9160 = G__9174;
continue;
} else {
var temp__5804__auto___9175__$2 = cljs.core.seq(seq__8688_9157);
if(temp__5804__auto___9175__$2){
var seq__8688_9176__$1 = temp__5804__auto___9175__$2;
if(cljs.core.chunked_seq_QMARK_(seq__8688_9176__$1)){
var c__5525__auto___9177 = cljs.core.chunk_first(seq__8688_9176__$1);
var G__9178 = cljs.core.chunk_rest(seq__8688_9176__$1);
var G__9179 = c__5525__auto___9177;
var G__9180 = cljs.core.count(c__5525__auto___9177);
var G__9181 = (0);
seq__8688_9157 = G__9178;
chunk__8689_9158 = G__9179;
count__8690_9159 = G__9180;
i__8691_9160 = G__9181;
continue;
} else {
var input_reaction_9183 = cljs.core.first(seq__8688_9176__$1);
var input_operation_9184 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_9183));
var reaction_path_9185 = [input_operation_9184,"-",operation_9152__$1].join('');
var temp__5802__auto___9187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_9185);
if(cljs.core.truth_(temp__5802__auto___9187)){
var old_edge_9188 = temp__5802__auto___9187;
var updated_edge_9189 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_9188,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9185,updated_edge_9189);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_9189], null)));
} else {
}
} else {
var data_9190 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_9185,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_9184,new cljs.core.Keyword(null,"to","to",192099007),operation_9152__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_9185,data_9190);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_9190));
} else {
}
}


var G__9192 = cljs.core.next(seq__8688_9176__$1);
var G__9193 = null;
var G__9194 = (0);
var G__9195 = (0);
seq__8688_9157 = G__9192;
chunk__8689_9158 = G__9193;
count__8690_9159 = G__9194;
i__8691_9160 = G__9195;
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


var G__9196 = cljs.core.next(seq__8463_9140__$1);
var G__9197 = null;
var G__9198 = (0);
var G__9199 = (0);
seq__8463_9080 = G__9196;
chunk__8464_9081 = G__9197;
count__8465_9082 = G__9198;
i__8466_9083 = G__9199;
continue;
}
} else {
}
}
break;
}


var G__9200 = cljs.core.next(seq__7817_9070__$1);
var G__9201 = null;
var G__9202 = (0);
var G__9203 = (0);
seq__7817_8928 = G__9200;
chunk__7818_8929 = G__9201;
count__7819_8930 = G__9202;
i__7820_8931 = G__9203;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__8713 = cljs.core.seq(cljs.core.vals(cljs.core.deref(new_nodes)));
var chunk__8714 = null;
var count__8715 = (0);
var i__8716 = (0);
while(true){
if((i__8716 < count__8715)){
var data = chunk__8714.cljs$core$IIndexed$_nth$arity$2(null,i__8716);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__9206 = seq__8713;
var G__9207 = chunk__8714;
var G__9208 = count__8715;
var G__9209 = (i__8716 + (1));
seq__8713 = G__9206;
chunk__8714 = G__9207;
count__8715 = G__9208;
i__8716 = G__9209;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__8713);
if(temp__5804__auto__){
var seq__8713__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8713__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__8713__$1);
var G__9210 = cljs.core.chunk_rest(seq__8713__$1);
var G__9211 = c__5525__auto__;
var G__9212 = cljs.core.count(c__5525__auto__);
var G__9213 = (0);
seq__8713 = G__9210;
chunk__8714 = G__9211;
count__8715 = G__9212;
i__8716 = G__9213;
continue;
} else {
var data = cljs.core.first(seq__8713__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__9214 = cljs.core.next(seq__8713__$1);
var G__9215 = null;
var G__9216 = (0);
var G__9217 = (0);
seq__8713 = G__9214;
chunk__8714 = G__9215;
count__8715 = G__9216;
i__8716 = G__9217;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__8727){
var map__8729 = p__8727;
var map__8729__$1 = cljs.core.__destructure_map(map__8729);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8729__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8729__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__5000__auto__;
}
})())){
var temp__5804__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5804__auto__)){
var container = temp__5804__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__8734_9220 = cljs.core.seq(subs);
var chunk__8735_9222 = null;
var count__8736_9223 = (0);
var i__8737_9224 = (0);
while(true){
if((i__8737_9224 < count__8736_9223)){
var map__8786_9227 = chunk__8735_9222.cljs$core$IIndexed$_nth$arity$2(null,i__8737_9224);
var map__8786_9228__$1 = cljs.core.__destructure_map(map__8786_9227);
var op_type_9229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8786_9228__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_9230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8786_9228__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_9231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8786_9228__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_9232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8786_9228__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5802__auto___9233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_9230);
if(cljs.core.truth_(temp__5802__auto___9233)){
var old_reaction_9234 = temp__5802__auto___9233;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9229,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_9234))){
var updated_node_9239 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_9234,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_9229,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_9229)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_9230,updated_node_9239);
} else {
}
} else {
var data_9241 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_9230,new cljs.core.Keyword(null,"label","label",1718410804),operation_9232,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_9229)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_9229], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_9230,data_9241);
}

if(cljs.core.truth_(input_signals_9231)){
var seq__8789_9242 = cljs.core.seq(input_signals_9231);
var chunk__8790_9243 = null;
var count__8791_9244 = (0);
var i__8792_9245 = (0);
while(true){
if((i__8792_9245 < count__8791_9244)){
var input_reaction_9246 = chunk__8790_9243.cljs$core$IIndexed$_nth$arity$2(null,i__8792_9245);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_9246),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_9230)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_9246),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_9230)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_9246,new cljs.core.Keyword(null,"to","to",192099007),reaction_9230], null));
}


var G__9247 = seq__8789_9242;
var G__9248 = chunk__8790_9243;
var G__9249 = count__8791_9244;
var G__9250 = (i__8792_9245 + (1));
seq__8789_9242 = G__9247;
chunk__8790_9243 = G__9248;
count__8791_9244 = G__9249;
i__8792_9245 = G__9250;
continue;
} else {
var temp__5804__auto___9251__$1 = cljs.core.seq(seq__8789_9242);
if(temp__5804__auto___9251__$1){
var seq__8789_9252__$1 = temp__5804__auto___9251__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8789_9252__$1)){
var c__5525__auto___9253 = cljs.core.chunk_first(seq__8789_9252__$1);
var G__9254 = cljs.core.chunk_rest(seq__8789_9252__$1);
var G__9255 = c__5525__auto___9253;
var G__9256 = cljs.core.count(c__5525__auto___9253);
var G__9257 = (0);
seq__8789_9242 = G__9254;
chunk__8790_9243 = G__9255;
count__8791_9244 = G__9256;
i__8792_9245 = G__9257;
continue;
} else {
var input_reaction_9258 = cljs.core.first(seq__8789_9252__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_9258),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_9230)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_9258),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_9230)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_9258,new cljs.core.Keyword(null,"to","to",192099007),reaction_9230], null));
}


var G__9260 = cljs.core.next(seq__8789_9252__$1);
var G__9261 = null;
var G__9262 = (0);
var G__9263 = (0);
seq__8789_9242 = G__9260;
chunk__8790_9243 = G__9261;
count__8791_9244 = G__9262;
i__8792_9245 = G__9263;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__9264 = seq__8734_9220;
var G__9265 = chunk__8735_9222;
var G__9266 = count__8736_9223;
var G__9267 = (i__8737_9224 + (1));
seq__8734_9220 = G__9264;
chunk__8735_9222 = G__9265;
count__8736_9223 = G__9266;
i__8737_9224 = G__9267;
continue;
} else {
var temp__5804__auto___9268__$1 = cljs.core.seq(seq__8734_9220);
if(temp__5804__auto___9268__$1){
var seq__8734_9269__$1 = temp__5804__auto___9268__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8734_9269__$1)){
var c__5525__auto___9270 = cljs.core.chunk_first(seq__8734_9269__$1);
var G__9271 = cljs.core.chunk_rest(seq__8734_9269__$1);
var G__9272 = c__5525__auto___9270;
var G__9273 = cljs.core.count(c__5525__auto___9270);
var G__9274 = (0);
seq__8734_9220 = G__9271;
chunk__8735_9222 = G__9272;
count__8736_9223 = G__9273;
i__8737_9224 = G__9274;
continue;
} else {
var map__8800_9275 = cljs.core.first(seq__8734_9269__$1);
var map__8800_9276__$1 = cljs.core.__destructure_map(map__8800_9275);
var op_type_9277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8800_9276__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_9278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8800_9276__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_9280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8800_9276__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_9281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8800_9276__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5802__auto___9282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_9278);
if(cljs.core.truth_(temp__5802__auto___9282)){
var old_reaction_9283 = temp__5802__auto___9282;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_9277,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_9283))){
var updated_node_9284 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_9283,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_9277,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_9277)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_9278,updated_node_9284);
} else {
}
} else {
var data_9286 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_9278,new cljs.core.Keyword(null,"label","label",1718410804),operation_9281,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_9277)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_9277], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_9278,data_9286);
}

if(cljs.core.truth_(input_signals_9280)){
var seq__8804_9288 = cljs.core.seq(input_signals_9280);
var chunk__8805_9289 = null;
var count__8806_9290 = (0);
var i__8807_9291 = (0);
while(true){
if((i__8807_9291 < count__8806_9290)){
var input_reaction_9292 = chunk__8805_9289.cljs$core$IIndexed$_nth$arity$2(null,i__8807_9291);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_9292),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_9278)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_9292),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_9278)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_9292,new cljs.core.Keyword(null,"to","to",192099007),reaction_9278], null));
}


var G__9294 = seq__8804_9288;
var G__9295 = chunk__8805_9289;
var G__9296 = count__8806_9290;
var G__9297 = (i__8807_9291 + (1));
seq__8804_9288 = G__9294;
chunk__8805_9289 = G__9295;
count__8806_9290 = G__9296;
i__8807_9291 = G__9297;
continue;
} else {
var temp__5804__auto___9298__$2 = cljs.core.seq(seq__8804_9288);
if(temp__5804__auto___9298__$2){
var seq__8804_9299__$1 = temp__5804__auto___9298__$2;
if(cljs.core.chunked_seq_QMARK_(seq__8804_9299__$1)){
var c__5525__auto___9300 = cljs.core.chunk_first(seq__8804_9299__$1);
var G__9301 = cljs.core.chunk_rest(seq__8804_9299__$1);
var G__9302 = c__5525__auto___9300;
var G__9303 = cljs.core.count(c__5525__auto___9300);
var G__9304 = (0);
seq__8804_9288 = G__9301;
chunk__8805_9289 = G__9302;
count__8806_9290 = G__9303;
i__8807_9291 = G__9304;
continue;
} else {
var input_reaction_9305 = cljs.core.first(seq__8804_9299__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_9305),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_9278)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_9305),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_9278)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_9305,new cljs.core.Keyword(null,"to","to",192099007),reaction_9278], null));
}


var G__9306 = cljs.core.next(seq__8804_9299__$1);
var G__9307 = null;
var G__9308 = (0);
var G__9309 = (0);
seq__8804_9288 = G__9306;
chunk__8805_9289 = G__9307;
count__8806_9290 = G__9308;
i__8807_9291 = G__9309;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__9310 = cljs.core.next(seq__8734_9269__$1);
var G__9311 = null;
var G__9312 = (0);
var G__9313 = (0);
seq__8734_9220 = G__9310;
chunk__8735_9222 = G__9311;
count__8736_9223 = G__9312;
i__8737_9224 = G__9313;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
