goog.provide('catan_board.views.hex');
/**
 * Gets the type of a hex from the hex-types structure.
 * hex-types structure: {:water #{coords} :terrain #{coords} :fog #{coords} :village #{coords}}
 * Returns the type keyword (:water/:terrain/:fog/:village) or nil if not found.
 */
catan_board.views.hex.get_hex_type = (function catan_board$views$hex$get_hex_type(hex_types,coord){
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
 * Creates SVG pattern definitions for resource textures
 */
catan_board.views.hex.resource_pattern = (function catan_board$views$hex$resource_pattern(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"wood-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"#487748"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"4,12 7,3 10,12",new cljs.core.Keyword(null,"fill","fill",883462889),"#1a3010"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"y","y",-1757859776),(12),new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"#0d1808"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"14,8 17,0 20,8",new cljs.core.Keyword(null,"fill","fill",883462889),"#1a3010"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(16),new cljs.core.Keyword(null,"y","y",-1757859776),(8),new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#0d1808"], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"brick-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(12),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(12),new cljs.core.Keyword(null,"fill","fill",883462889),"#b8543c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b3c2c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b3c2c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(6),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b3c2c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(6),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b3c2c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(6),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b3c2c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"wheat-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"fill","fill",883462889),"#e8c547"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),(8),new cljs.core.Keyword(null,"y2","y2",-718691301),(8),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#d4a730",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-2),new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"x2","x2",-1362513475),(2),new cljs.core.Keyword(null,"y2","y2",-718691301),(10),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#d4a730",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(6),new cljs.core.Keyword(null,"y1","y1",589123466),(-2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(10),new cljs.core.Keyword(null,"y2","y2",-718691301),(2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#d4a730",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"sheep-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"#9bcd6f"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),(5),new cljs.core.Keyword(null,"cy","cy",755331060),(7),new cljs.core.Keyword(null,"rx","rx",1627208482),2.5,new cljs.core.Keyword(null,"ry","ry",-334598563),(2),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),3.5,new cljs.core.Keyword(null,"cy","cy",755331060),6.5,new cljs.core.Keyword(null,"r","r",-471384190),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(3),new cljs.core.Keyword(null,"cy","cy",755331060),6.2,new cljs.core.Keyword(null,"r","r",-471384190),0.3,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),4.5,new cljs.core.Keyword(null,"y","y",-1757859776),8.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"y","y",-1757859776),8.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),(15),new cljs.core.Keyword(null,"cy","cy",755331060),(5),new cljs.core.Keyword(null,"rx","rx",1627208482),2.5,new cljs.core.Keyword(null,"ry","ry",-334598563),(2),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),13.5,new cljs.core.Keyword(null,"cy","cy",755331060),4.5,new cljs.core.Keyword(null,"r","r",-471384190),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(13),new cljs.core.Keyword(null,"cy","cy",755331060),4.2,new cljs.core.Keyword(null,"r","r",-471384190),0.3,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),14.5,new cljs.core.Keyword(null,"y","y",-1757859776),6.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(16),new cljs.core.Keyword(null,"y","y",-1757859776),6.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),(10),new cljs.core.Keyword(null,"cy","cy",755331060),(15),new cljs.core.Keyword(null,"rx","rx",1627208482),2.5,new cljs.core.Keyword(null,"ry","ry",-334598563),(2),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),8.5,new cljs.core.Keyword(null,"cy","cy",755331060),14.5,new cljs.core.Keyword(null,"r","r",-471384190),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(8),new cljs.core.Keyword(null,"cy","cy",755331060),14.2,new cljs.core.Keyword(null,"r","r",-471384190),0.3,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),9.5,new cljs.core.Keyword(null,"y","y",-1757859776),16.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(11),new cljs.core.Keyword(null,"y","y",-1757859776),16.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"ore-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"#7c7c7c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"3,6 7,3 9,7 5,9",new cljs.core.Keyword(null,"fill","fill",883462889),"#5c5c5c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"5,4 7,3 8,5",new cljs.core.Keyword(null,"fill","fill",883462889),"#9c9c9c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"13,4 17,2 18,6 14,8",new cljs.core.Keyword(null,"fill","fill",883462889),"#5c5c5c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"14,3 17,2 17,5",new cljs.core.Keyword(null,"fill","fill",883462889),"#9c9c9c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"4,14 8,12 10,16 6,17",new cljs.core.Keyword(null,"fill","fill",883462889),"#5c5c5c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"6,13 8,12 9,14",new cljs.core.Keyword(null,"fill","fill",883462889),"#9c9c9c"], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"desert-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"#d4c4a0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(2),new cljs.core.Keyword(null,"cy","cy",755331060),(2),new cljs.core.Keyword(null,"r","r",-471384190),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"#c4b490"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(18),new cljs.core.Keyword(null,"cy","cy",755331060),(8),new cljs.core.Keyword(null,"r","r",-471384190),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"#c4b490"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(7),new cljs.core.Keyword(null,"cy","cy",755331060),(18),new cljs.core.Keyword(null,"r","r",-471384190),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"#c4b490"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(15),new cljs.core.Keyword(null,"cy","cy",755331060),(15),new cljs.core.Keyword(null,"r","r",-471384190),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"#c4b490"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(10),new cljs.core.Keyword(null,"cy","cy",755331060),(5),new cljs.core.Keyword(null,"r","r",-471384190),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"#c4b490"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"water-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"#4A90E2"], null)], null)], null),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"gold-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"#DAA520"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#FFD700",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#B8860B",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(9),new cljs.core.Keyword(null,"y2","y2",-718691301),(2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFF8DC",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(5),new cljs.core.Keyword(null,"x2","x2",-1362513475),(9),new cljs.core.Keyword(null,"y2","y2",-718691301),(5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8B7500",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(11),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#FFD700",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#B8860B",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(11),new cljs.core.Keyword(null,"y1","y1",589123466),(1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(19),new cljs.core.Keyword(null,"y2","y2",-718691301),(1),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFF8DC",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(11),new cljs.core.Keyword(null,"y1","y1",589123466),(4),new cljs.core.Keyword(null,"x2","x2",-1362513475),(19),new cljs.core.Keyword(null,"y2","y2",-718691301),(4),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8B7500",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(7),new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#FFD700",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#B8860B",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(5),new cljs.core.Keyword(null,"y1","y1",589123466),(7),new cljs.core.Keyword(null,"x2","x2",-1362513475),(13),new cljs.core.Keyword(null,"y2","y2",-718691301),(7),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFF8DC",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(5),new cljs.core.Keyword(null,"y1","y1",589123466),(10),new cljs.core.Keyword(null,"x2","x2",-1362513475),(13),new cljs.core.Keyword(null,"y2","y2",-718691301),(10),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8B7500",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(13),new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#FFD700",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#B8860B",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"y1","y1",589123466),(13),new cljs.core.Keyword(null,"x2","x2",-1362513475),(10),new cljs.core.Keyword(null,"y2","y2",-718691301),(13),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFF8DC",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"y1","y1",589123466),(16),new cljs.core.Keyword(null,"x2","x2",-1362513475),(10),new cljs.core.Keyword(null,"y2","y2",-718691301),(16),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8B7500",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(12),new cljs.core.Keyword(null,"y","y",-1757859776),(14),new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#FFD700",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#B8860B",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(12),new cljs.core.Keyword(null,"y1","y1",589123466),(14),new cljs.core.Keyword(null,"x2","x2",-1362513475),(20),new cljs.core.Keyword(null,"y2","y2",-718691301),(14),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFF8DC",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(12),new cljs.core.Keyword(null,"y1","y1",589123466),(17),new cljs.core.Keyword(null,"x2","x2",-1362513475),(20),new cljs.core.Keyword(null,"y2","y2",-718691301),(17),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8B7500",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"village-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"fill","fill",883462889),"#d4c4a0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"5,15 15,5 25,15",new cljs.core.Keyword(null,"fill","fill",883462889),"#654321"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(7),new cljs.core.Keyword(null,"y","y",-1757859776),(15),new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(14),new cljs.core.Keyword(null,"fill","fill",883462889),"#8B6914"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(13),new cljs.core.Keyword(null,"y","y",-1757859776),(18),new cljs.core.Keyword(null,"width","width",-384071477),(4),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null)], null)], null);
});
/**
 * Renders a single hexagonal tile as an SVG polygon.
 * hex-data: {:coord [q r] :resource keyword :number int}
 * swap-number-mode?: boolean indicating if swap number mode is active
 * selected-token-coord: [q r] of selected token or nil
 * developer-mode?: boolean indicating if developer mode is active
 * fog-state: map of [q r] -> {:revealed? boolean :terrain keyword :number int}
 */
catan_board.views.hex.hex_tile = (function catan_board$views$hex$hex_tile(hex_data,swap_number_mode_QMARK_,selected_token_coord,developer_mode_QMARK_,fog_state){
var map__23841 = hex_data;
var map__23841__$1 = cljs.core.__destructure_map(map__23841);
var coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23841__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23841__$1,new cljs.core.Keyword(null,"resource","resource",251898836));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23841__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var hex_size = catan_board.db.hex_size;
var vertices = catan_board.utils.hex.hex_vertices(coord,hex_size);
var points = catan_board.utils.hex.vertices_to_svg_points(vertices);
var vec__23843 = catan_board.utils.hex.hex_center(coord,hex_size);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23843,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23843,(1),null);
var fog_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fog_state,coord);
var is_fog_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource,new cljs.core.Keyword(null,"fog","fog",1515389980));
var is_revealed_QMARK_ = (function (){var and__5000__auto__ = is_fog_QMARK_;
if(and__5000__auto__){
var and__5000__auto____$1 = fog_info;
if(cljs.core.truth_(and__5000__auto____$1)){
return new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(fog_info);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var display_resource = (cljs.core.truth_(is_revealed_QMARK_)?new cljs.core.Keyword(null,"terrain","terrain",704966005).cljs$core$IFn$_invoke$arity$1(fog_info):resource);
var display_number = (cljs.core.truth_(is_revealed_QMARK_)?new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(fog_info):number);
var editor_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-editor-mode?","custom-scenario-editor-mode?",1825372298)], null)));
var fill = (cljs.core.truth_((function (){var or__5002__auto__ = ((is_fog_QMARK_) && (cljs.core.not(is_revealed_QMARK_)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return editor_mode_QMARK_;
}
})())?"#949494":(cljs.core.truth_(display_resource)?["url(#",cljs.core.name(display_resource),"-pattern)"].join(''):catan_board.utils.resources.get_resource_color(display_resource)
));
var is_selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,selected_token_coord);
var is_fog_clickable_QMARK_ = ((is_fog_QMARK_) && (((cljs.core.not(is_revealed_QMARK_)) && (cljs.core.not(swap_number_mode_QMARK_)))));
var editor_selection_mode = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-hex-selection-mode","editor-hex-selection-mode",869835898)], null)));
var draft = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null)));
var assigned_type = (cljs.core.truth_(editor_mode_QMARK_)?catan_board.views.hex.get_hex_type(new cljs.core.Keyword(null,"hex-types","hex-types",-1144901913).cljs$core$IFn$_invoke$arity$1(draft),coord):null);
var is_editor_clickable_QMARK_ = (function (){var and__5000__auto__ = editor_mode_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return (!(is_fog_clickable_QMARK_));
} else {
return and__5000__auto__;
}
})();
var landscape_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"landscape-mode?","landscape-mode?",1839338284)], null)));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["hex-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coord)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(coord))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"stroke","stroke",1741823555),catan_board.utils.hex.path_color,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(6),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_((function (){var or__5002__auto__ = is_fog_clickable_QMARK_;
if(or__5002__auto__){
return or__5002__auto__;
} else {
return is_editor_clickable_QMARK_;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((is_fog_clickable_QMARK_)?(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reveal-fog-tile","reveal-fog-tile",-984124702),coord], null));
}):(cljs.core.truth_(is_editor_clickable_QMARK_)?(function (e){
e.stopPropagation();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editor_selection_mode,new cljs.core.Keyword(null,"harbor","harbor",-638543472))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"place-harbor-at-hex","place-harbor-at-hex",1316086961),coord], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-hex-type","assign-hex-type",-73552081),coord,editor_selection_mode], null));
}
}):null
))], null)], null),((((is_fog_QMARK_) && (cljs.core.not(is_revealed_QMARK_))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],[cy,"middle",(32),"bold","#ffffff","middle",cx,"none","Arial, sans-serif"]),"?"], null):null),(cljs.core.truth_((function (){var and__5000__auto__ = display_number;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(editor_mode_QMARK_);
} else {
return and__5000__auto__;
}
})())?(function (){var is_red_QMARK_ = catan_board.utils.numbers.is_red_number_QMARK_(display_number);
var pips = catan_board.utils.numbers.get_probability_pips(display_number);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(swap_number_mode_QMARK_)?(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-token","select-token",436885760),coord], null));
}):null),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(swap_number_mode_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"r","r",-471384190),(18),new cljs.core.Keyword(null,"fill","fill",883462889),((is_red_QMARK_)?"#d32f2f":"#f5f5dc"),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#333",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"class","class",-2030961996),((is_selected_QMARK_)?"token-selected":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],[(cy - (3)),"middle",(20),"bold",((is_red_QMARK_)?"#ffffff":"#333"),"middle",((is_selected_QMARK_)?"token-selected":null),cx,"Arial, sans-serif"]),cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_number)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__5480__auto__ = (function catan_board$views$hex$hex_tile_$_iter__23897(s__23898){
return (new cljs.core.LazySeq(null,(function (){
var s__23898__$1 = s__23898;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23898__$1);
if(temp__5804__auto__){
var s__23898__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23898__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23898__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23900 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23899 = (0);
while(true){
if((i__23899 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__23899);
cljs.core.chunk_append(b__23900,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(cx + ((i - ((pips - (1)) / (2))) * (3))),new cljs.core.Keyword(null,"cy","cy",755331060),(cy + (10)),new cljs.core.Keyword(null,"r","r",-471384190),1.5,new cljs.core.Keyword(null,"fill","fill",883462889),((is_red_QMARK_)?"#ffffff":"#333")], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__24020 = (i__23899 + (1));
i__23899 = G__24020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23900),catan_board$views$hex$hex_tile_$_iter__23897(cljs.core.chunk_rest(s__23898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23900),null);
}
} else {
var i = cljs.core.first(s__23898__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(cx + ((i - ((pips - (1)) / (2))) * (3))),new cljs.core.Keyword(null,"cy","cy",755331060),(cy + (10)),new cljs.core.Keyword(null,"r","r",-471384190),1.5,new cljs.core.Keyword(null,"fill","fill",883462889),((is_red_QMARK_)?"#ffffff":"#333")], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),catan_board$views$hex$hex_tile_$_iter__23897(cljs.core.rest(s__23898__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(pips));
})()], null)], null);
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_resource,new cljs.core.Keyword(null,"desert","desert",-559764082))) && (cljs.core.not(editor_mode_QMARK_))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),cx,new cljs.core.Keyword(null,"y","y",-1757859776),cy,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(28),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),"drop-shadow(2px 2px 3px rgba(0,0,0,0.3))"], null)], null),"\uD83C\uDF35"], null):null),(cljs.core.truth_((function (){var and__5000__auto__ = editor_mode_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return assigned_type;
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),cx,new cljs.core.Keyword(null,"y","y",-1757859776),cy,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(landscape_mode_QMARK_)?["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((-90))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cx)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cy),")"].join(''):null),new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null),cljs.core.name(assigned_type)], null):null),(cljs.core.truth_((function (){var and__5000__auto__ = editor_mode_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return assigned_type;
} else {
return and__5000__auto__;
}
})())?(function (){var clear_x = (cljs.core.truth_(landscape_mode_QMARK_)?(cx + (hex_size * 0.4)):cx);
var clear_y = (cljs.core.truth_(landscape_mode_QMARK_)?cy:(cy + (hex_size * 0.4)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-hex-assignment","clear-hex-assignment",-374118093),coord], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),clear_x,new cljs.core.Keyword(null,"cy","cy",755331060),clear_y,new cljs.core.Keyword(null,"r","r",-471384190),(8),new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(220, 53, 69, 0.9)",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ffffff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),clear_x,new cljs.core.Keyword(null,"y","y",-1757859776),clear_y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),"\u00D7"], null)], null);
})():null),(cljs.core.truth_(developer_mode_QMARK_)?(function (){var vec__23926 = coord;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23926,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23926,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),new cljs.core.Keyword(null,"x","x",2099068185)],[(cy - (hex_size * 0.7)),"middle",(cljs.core.truth_(landscape_mode_QMARK_)?["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((-90))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cx)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cy),")"].join(''):null),(10),"bold","#000000",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),"drop-shadow(0 0 2px rgba(255,255,255,0.8))"], null),"middle",cx]),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),"]"].join('')], null);
})():null)], null);
});
/**
 * Gets the two vertices of a hex edge based on direction.
 * Directions: 0=S, 1=SE, 2=NE, 3=N, 4=NW, 5=SW (counter clockwise from south/bottom)
 * For flat-top hexagons, vertices are at 60° intervals starting from 0° (east).
 * Vertex positions: V0=0°(E), V1=60°(NE), V2=120°(NW), V3=180°(W), V4=240°(SW), V5=300°(SE)
 * Edges are between consecutive vertices:
 * - S (dir 0) = edge between V4 and V5 (bottom edge)
 * - SE (dir 1) = edge between V5 and V0 (lower-right edge)
 * - NE (dir 2) = edge between V0 and V1 (upper-right edge)
 * - N (dir 3) = edge between V1 and V2 (top edge)
 * - NW (dir 4) = edge between V2 and V3 (upper-left edge)
 * - SW (dir 5) = edge between V3 and V4 (lower-left edge)
 */
catan_board.views.hex.get_edge_points = (function catan_board$views$hex$get_edge_points(center,hex_size,direction){
var vec__23931 = center;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23931,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23931,(1),null);
var vertex_index1 = cljs.core.mod(((1) - direction),(6));
var vertex_index2 = cljs.core.mod(((2) - direction),(6));
var angle1 = ((Math.PI / (3)) * vertex_index1);
var angle2 = ((Math.PI / (3)) * vertex_index2);
var x1 = (cx + (hex_size * Math.cos(angle1)));
var y1 = (cy + (hex_size * Math.sin(angle1)));
var x2 = (cx + (hex_size * Math.cos(angle2)));
var y2 = (cy + (hex_size * Math.sin(angle2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)], null);
});
/**
 * Renders clickable directional areas for harbor placement around a hex.
 * Shows 6 trapezoid areas pointing to each edge where a harbor can be placed.
 */
catan_board.views.hex.harbor_direction_selector = (function catan_board$views$hex$harbor_direction_selector(coord){
var hex_size = catan_board.db.hex_size;
var vec__23937 = catan_board.utils.hex.hex_center(coord,hex_size);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23937,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23937,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__5480__auto__ = (function catan_board$views$hex$harbor_direction_selector_$_iter__23940(s__23941){
return (new cljs.core.LazySeq(null,(function (){
var s__23941__$1 = s__23941;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23941__$1);
if(temp__5804__auto__){
var s__23941__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23941__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23941__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23943 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23942 = (0);
while(true){
if((i__23942 < size__5479__auto__)){
var direction = cljs.core._nth(c__5478__auto__,i__23942);
cljs.core.chunk_append(b__23943,(function (){var vec__23947 = catan_board.views.hex.get_edge_points(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),hex_size,direction);
var vec__23950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23947,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23950,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23950,(1),null);
var vec__23953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23947,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23953,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23953,(1),null);
var mid_x = ((x1 + x2) / (2));
var mid_y = ((y1 + y2) / (2));
var outer_dist = (hex_size * 0.3);
var angle = Math.atan2((mid_y - cy),(mid_x - cx));
var outer_x = (mid_x + (outer_dist * Math.cos(angle)));
var outer_y = (mid_y + (outer_dist * Math.sin(angle)));
var points = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x2),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y2)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outer_x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outer_y)].join('');
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(52, 152, 219, 0.7)",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#2980b9",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23942,vec__23947,vec__23950,x1,y1,vec__23953,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,c__5478__auto__,size__5479__auto__,b__23943,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy){
return (function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-harbor-direction","set-harbor-direction",1655338539),coord,direction], null));
});})(i__23942,vec__23947,vec__23950,x1,y1,vec__23953,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,c__5478__auto__,size__5479__auto__,b__23943,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__23942,vec__23947,vec__23950,x1,y1,vec__23953,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,c__5478__auto__,size__5479__auto__,b__23943,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy){
return (function (e){
return e.target.style.setProperty("fill","rgba(52, 152, 219, 0.9)");
});})(i__23942,vec__23947,vec__23950,x1,y1,vec__23953,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,c__5478__auto__,size__5479__auto__,b__23943,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__23942,vec__23947,vec__23950,x1,y1,vec__23953,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,c__5478__auto__,size__5479__auto__,b__23943,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy){
return (function (e){
return e.target.style.setProperty("fill","rgba(52, 152, 219, 0.7)");
});})(i__23942,vec__23947,vec__23950,x1,y1,vec__23953,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,c__5478__auto__,size__5479__auto__,b__23943,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),direction], null));
})());

var G__24021 = (i__23942 + (1));
i__23942 = G__24021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23943),catan_board$views$hex$harbor_direction_selector_$_iter__23940(cljs.core.chunk_rest(s__23941__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23943),null);
}
} else {
var direction = cljs.core.first(s__23941__$2);
return cljs.core.cons((function (){var vec__23957 = catan_board.views.hex.get_edge_points(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),hex_size,direction);
var vec__23960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23957,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23960,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23960,(1),null);
var vec__23963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23957,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23963,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23963,(1),null);
var mid_x = ((x1 + x2) / (2));
var mid_y = ((y1 + y2) / (2));
var outer_dist = (hex_size * 0.3);
var angle = Math.atan2((mid_y - cy),(mid_x - cx));
var outer_x = (mid_x + (outer_dist * Math.cos(angle)));
var outer_y = (mid_y + (outer_dist * Math.sin(angle)));
var points = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x2),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y2)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outer_x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outer_y)].join('');
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(52, 152, 219, 0.7)",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#2980b9",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__23957,vec__23960,x1,y1,vec__23963,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy){
return (function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-harbor-direction","set-harbor-direction",1655338539),coord,direction], null));
});})(vec__23957,vec__23960,x1,y1,vec__23963,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__23957,vec__23960,x1,y1,vec__23963,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy){
return (function (e){
return e.target.style.setProperty("fill","rgba(52, 152, 219, 0.9)");
});})(vec__23957,vec__23960,x1,y1,vec__23963,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__23957,vec__23960,x1,y1,vec__23963,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy){
return (function (e){
return e.target.style.setProperty("fill","rgba(52, 152, 219, 0.7)");
});})(vec__23957,vec__23960,x1,y1,vec__23963,x2,y2,mid_x,mid_y,outer_dist,angle,outer_x,outer_y,points,direction,s__23941__$2,temp__5804__auto__,hex_size,vec__23937,cx,cy))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),direction], null));
})(),catan_board$views$hex$harbor_direction_selector_$_iter__23940(cljs.core.rest(s__23941__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})()], null);
});
/**
 * Renders a harbor as a trapezoid tile on the edge of the board
 */
catan_board.views.hex.harbor_trapezoid = (function catan_board$views$hex$harbor_trapezoid(harbor_data){
var map__23966 = harbor_data;
var map__23966__$1 = cljs.core.__destructure_map(map__23966);
var land_hex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23966__$1,new cljs.core.Keyword(null,"land-hex","land-hex",151922960));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23966__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23966__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var hex_size = catan_board.db.hex_size;
var vec__23967 = catan_board.utils.hex.axial_to_pixel(land_hex,hex_size);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23967,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23967,(1),null);
var vec__23970 = catan_board.views.hex.get_edge_points(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),hex_size,direction);
var vec__23973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23970,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23973,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23973,(1),null);
var vec__23976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23970,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23976,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23976,(1),null);
var mid_x = ((x1 + x2) / (2));
var mid_y = ((y1 + y2) / (2));
var edge_angle = Math.atan2((y2 - y1),(x2 - x1));
var perpendicular_angle = (edge_angle + (Math.PI / (2)));
var offset = ((-1) * (hex_size * 0.7));
var side_offset = (offset * 0.6);
var x_side_right = (x2 + (side_offset * Math.cos(perpendicular_angle)));
var y_side_right = (y2 + (side_offset * Math.sin(perpendicular_angle)));
var x_outer_right = (x2 + (offset * Math.cos(perpendicular_angle)));
var y_outer_right = (y2 + (offset * Math.sin(perpendicular_angle)));
var peak_offset = (offset * 1.15);
var mid_outer_x = (mid_x + (peak_offset * Math.cos(perpendicular_angle)));
var mid_outer_y = (mid_y + (peak_offset * Math.sin(perpendicular_angle)));
var x_outer_left = (x1 + (offset * Math.cos(perpendicular_angle)));
var y_outer_left = (y1 + (offset * Math.sin(perpendicular_angle)));
var x_side_left = (x1 + (side_offset * Math.cos(perpendicular_angle)));
var y_side_left = (y1 + (side_offset * Math.sin(perpendicular_angle)));
var points = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x2),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y2)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_side_right),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_side_right)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_outer_right),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_outer_right)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mid_outer_x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mid_outer_y)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_outer_left),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_outer_left)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_side_left),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_side_left)].join('');
var ratio = catan_board.utils.harbors.get_harbor_ratio(type);
var color = catan_board.utils.harbors.get_harbor_color(type);
var text_x = (mid_x + ((offset / (2)) * Math.cos(perpendicular_angle)));
var text_y = (mid_y + ((offset / (2)) * Math.sin(perpendicular_angle)));
var rotation_deg = (((180) / Math.PI) * edge_angle);
var readable_rotation = (rotation_deg + (180));
var resource_icon = (function (){var G__23979 = type;
var G__23979__$1 = (((G__23979 instanceof cljs.core.Keyword))?G__23979.fqn:null);
switch (G__23979__$1) {
case "wood":
return "\uD83E\uDEB5";

break;
case "brick":
return "\uD83E\uDDF1";

break;
case "wheat":
return "\uD83C\uDF3E";

break;
case "sheep":
return "\uD83D\uDC11";

break;
case "ore":
return "\uD83E\uDEA8";

break;
case "generic":
return "?";

break;
default:
return "?";

}
})();
var editor_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-editor-mode?","custom-scenario-editor-mode?",1825372298)], null)));
var harbor_types = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generic","generic",-1245036524),new cljs.core.Keyword(null,"wood","wood",149241168),new cljs.core.Keyword(null,"brick","brick",895065736),new cljs.core.Keyword(null,"wheat","wheat",783520466),new cljs.core.Keyword(null,"sheep","sheep",-1409901353),new cljs.core.Keyword(null,"ore","ore",-1419191389)], null);
var next_type = (function (){var current_idx = harbor_types.indexOf(type);
var next_idx = cljs.core.mod((current_idx + (1)),cljs.core.count(harbor_types));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(harbor_types,next_idx);
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["harbor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(land_hex)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(land_hex)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(direction)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"stroke","stroke",1741823555),catan_board.utils.hex.path_color,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(6),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.95,new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(editor_mode_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(editor_mode_QMARK_)?(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-harbor-type","assign-harbor-type",331169236),land_hex,direction,next_type], null));
}):null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-harbor-type","assign-harbor-type",331169236),land_hex,direction,next_type], null));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"generic","generic",-1245036524)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],[(cljs.core.truth_(resource_icon)?(text_y - (8)):text_y),"middle",["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(readable_rotation)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_y),")"].join(''),(10),"bold","#000000",(cljs.core.truth_(editor_mode_QMARK_)?"pointer":null),"middle",text_x,"Arial, sans-serif"]),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),":1"].join('')], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),text_x,new cljs.core.Keyword(null,"y","y",-1757859776),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"generic","generic",-1245036524)))?(text_y + (10)):(text_y + (3))),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(21),new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(readable_rotation)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_y),")"].join(''),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(editor_mode_QMARK_)?"pointer":null)], null),resource_icon], null)], null),(cljs.core.truth_(editor_mode_QMARK_)?(function (){var remove_x = (mid_outer_x + ((8) * Math.cos(perpendicular_angle)));
var remove_y = (mid_outer_y + ((8) * Math.sin(perpendicular_angle)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-harbor","remove-harbor",-1945440553),land_hex,direction], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),remove_x,new cljs.core.Keyword(null,"cy","cy",755331060),remove_y,new cljs.core.Keyword(null,"r","r",-471384190),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(220, 53, 69, 0.9)",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ffffff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),remove_x,new cljs.core.Keyword(null,"y","y",-1757859776),remove_y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),"\u00D7"], null)], null);
})():null)], null);
});
/**
 * Returns the center [x y] among all pixels
 */
catan_board.views.hex.compute_original_center = (function catan_board$views$hex$compute_original_center(grid_pattern,all_pixels,padding){
var col_sizes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(parseInt,clojure.string.split.cljs$core$IFn$_invoke$arity$2(grid_pattern,/-/));
var num_cols = cljs.core.count(col_sizes);
var middle_col_index = cljs.core.quot(num_cols,(2));
var middle_col_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_sizes,middle_col_index);
var min_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,all_pixels));
var max_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,all_pixels));
var min_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,all_pixels));
var max_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,all_pixels));
var view_x = (min_x - padding);
var view_y = (min_y - padding);
var view_width = ((max_x - min_x) + (padding * (2)));
var view_height = ((max_y - min_y) + (padding * (2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.even_QMARK_(middle_col_value))?((view_x + (view_width / (2))) - (padding / (2))):(view_x + (view_width / (2)))),(view_y + (view_height / (2)))], null);
});
/**
 * Renders the complete hex grid.
 * hexes: vector of hex data maps
 * harbors: vector of harbor data maps
 * swap-number-mode?: boolean indicating if swap number mode is active
 * selected-token-coord: [q r] of selected token or nil
 * developer-mode?: boolean indicating if developer mode is active
 * fog-state: map of [q r] -> {:revealed? boolean :terrain keyword :number int}
 */
catan_board.views.hex.hex_grid = (function catan_board$views$hex$hex_grid(p__23981){
var map__23982 = p__23981;
var map__23982__$1 = cljs.core.__destructure_map(map__23982);
var scenario = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23982__$1,new cljs.core.Keyword(null,"scenario","scenario",-316635333));
var hexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23982__$1,new cljs.core.Keyword(null,"hexes","hexes",-1419989846));
var harbors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23982__$1,new cljs.core.Keyword(null,"harbors","harbors",1522363032));
var swap_number_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23982__$1,new cljs.core.Keyword(null,"swap-number-mode?","swap-number-mode?",-906147176));
var selected_token_coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23982__$1,new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460));
var developer_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23982__$1,new cljs.core.Keyword(null,"developer-mode?","developer-mode?",-664498178));
var fog_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23982__$1,new cljs.core.Keyword(null,"fog-state","fog-state",-562317010));
var scenario_config = catan_board.scenarios.registry.get_scenario(scenario);
var grid_pattern = new cljs.core.Keyword(null,"grid-pattern","grid-pattern",-1763214640).cljs$core$IFn$_invoke$arity$1(scenario_config);
var hex_size = catan_board.db.hex_size;
var all_coords = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coord","coord",-1453656639),hexes);
var all_pixels = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23980_SHARP_){
return catan_board.utils.hex.axial_to_pixel(p1__23980_SHARP_,hex_size);
}),all_coords);
var landscape_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"landscape-mode?","landscape-mode?",1839338284)], null)));
var harbor_placement_coord = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"harbor-placement-coord","harbor-placement-coord",-1362481537)], null)));
var editor_mode_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-editor-mode?","custom-scenario-editor-mode?",1825372298)], null)));
var draft = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null)));
var display_harbors = (cljs.core.truth_(editor_mode_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(draft,new cljs.core.Keyword(null,"harbors","harbors",1522363032),cljs.core.PersistentVector.EMPTY):harbors);
var padding = (hex_size * (2));
var vec__23983 = catan_board.views.hex.compute_original_center(grid_pattern,all_pixels,padding);
var center_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23983,(0),null);
var center_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23983,(1),null);
var min_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(landscape_mode_QMARK_)?cljs.core.second:cljs.core.first),all_pixels));
var max_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(landscape_mode_QMARK_)?cljs.core.second:cljs.core.first),all_pixels));
var min_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(landscape_mode_QMARK_)?cljs.core.first:cljs.core.second),all_pixels));
var max_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(landscape_mode_QMARK_)?cljs.core.first:cljs.core.second),all_pixels));
var view_x = (min_x - padding);
var view_y = (min_y - padding);
var view_width = ((max_x - min_x) + (padding * (2)));
var view_height = ((max_y - min_y) + (padding * (2)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_y)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_height)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"800px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#1e88e5"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(swap_number_mode_QMARK_)?(function (e){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-token-selection","clear-token-selection",1139468230)], null));
}):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.resource_pattern], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(cljs.core.truth_(landscape_mode_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate (90 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(center_x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(center_y)," )"].join('')], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__5480__auto__ = (function catan_board$views$hex$hex_grid_$_iter__23986(s__23987){
return (new cljs.core.LazySeq(null,(function (){
var s__23987__$1 = s__23987;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23987__$1);
if(temp__5804__auto__){
var s__23987__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23987__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23987__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23989 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23988 = (0);
while(true){
if((i__23988 < size__5479__auto__)){
var hex_data = cljs.core._nth(c__5478__auto__,i__23988);
cljs.core.chunk_append(b__23989,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.hex_tile,hex_data,swap_number_mode_QMARK_,selected_token_coord,developer_mode_QMARK_,fog_state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["hex-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex_data))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex_data)))].join('')], null)));

var G__24023 = (i__23988 + (1));
i__23988 = G__24023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23989),catan_board$views$hex$hex_grid_$_iter__23986(cljs.core.chunk_rest(s__23987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23989),null);
}
} else {
var hex_data = cljs.core.first(s__23987__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.hex_tile,hex_data,swap_number_mode_QMARK_,selected_token_coord,developer_mode_QMARK_,fog_state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["hex-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex_data))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex_data)))].join('')], null)),catan_board$views$hex$hex_grid_$_iter__23986(cljs.core.rest(s__23987__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(hexes);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__5480__auto__ = (function catan_board$views$hex$hex_grid_$_iter__23990(s__23991){
return (new cljs.core.LazySeq(null,(function (){
var s__23991__$1 = s__23991;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23991__$1);
if(temp__5804__auto__){
var s__23991__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23991__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23991__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23993 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23992 = (0);
while(true){
if((i__23992 < size__5479__auto__)){
var harbor_data = cljs.core._nth(c__5478__auto__,i__23992);
cljs.core.chunk_append(b__23993,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.harbor_trapezoid,harbor_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["harbor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"land-hex","land-hex",151922960).cljs$core$IFn$_invoke$arity$1(harbor_data))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"land-hex","land-hex",151922960).cljs$core$IFn$_invoke$arity$1(harbor_data))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(harbor_data))].join('')], null)));

var G__24024 = (i__23992 + (1));
i__23992 = G__24024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23993),catan_board$views$hex$hex_grid_$_iter__23990(cljs.core.chunk_rest(s__23991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23993),null);
}
} else {
var harbor_data = cljs.core.first(s__23991__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.harbor_trapezoid,harbor_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["harbor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"land-hex","land-hex",151922960).cljs$core$IFn$_invoke$arity$1(harbor_data))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"land-hex","land-hex",151922960).cljs$core$IFn$_invoke$arity$1(harbor_data))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(harbor_data))].join('')], null)),catan_board$views$hex$hex_grid_$_iter__23990(cljs.core.rest(s__23991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(display_harbors);
})()], null),(cljs.core.truth_(harbor_placement_coord)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.harbor_direction_selector,harbor_placement_coord], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__5480__auto__ = (function catan_board$views$hex$hex_grid_$_iter__23994(s__23995){
return (new cljs.core.LazySeq(null,(function (){
var s__23995__$1 = s__23995;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23995__$1);
if(temp__5804__auto__){
var s__23995__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23995__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23995__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23997 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23996 = (0);
while(true){
if((i__23996 < size__5479__auto__)){
var map__23998 = cljs.core._nth(c__5478__auto__,i__23996);
var map__23998__$1 = cljs.core.__destructure_map(map__23998);
var coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23998__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
cljs.core.chunk_append(b__23997,(function (){var hex_size__$1 = catan_board.db.hex_size;
var vertices = catan_board.utils.hex.hex_vertices(coord,hex_size__$1);
var iter__5480__auto__ = ((function (i__23996,hex_size__$1,vertices,map__23998,map__23998__$1,coord,c__5478__auto__,size__5479__auto__,b__23997,s__23995__$2,temp__5804__auto__,scenario_config,grid_pattern,hex_size,all_coords,all_pixels,landscape_mode_QMARK_,harbor_placement_coord,editor_mode_QMARK_,draft,display_harbors,padding,vec__23983,center_x,center_y,min_x,max_x,min_y,max_y,view_x,view_y,view_width,view_height,map__23982,map__23982__$1,scenario,hexes,harbors,swap_number_mode_QMARK_,selected_token_coord,developer_mode_QMARK_,fog_state){
return (function catan_board$views$hex$hex_grid_$_iter__23994_$_iter__23999(s__24000){
return (new cljs.core.LazySeq(null,((function (i__23996,hex_size__$1,vertices,map__23998,map__23998__$1,coord,c__5478__auto__,size__5479__auto__,b__23997,s__23995__$2,temp__5804__auto__,scenario_config,grid_pattern,hex_size,all_coords,all_pixels,landscape_mode_QMARK_,harbor_placement_coord,editor_mode_QMARK_,draft,display_harbors,padding,vec__23983,center_x,center_y,min_x,max_x,min_y,max_y,view_x,view_y,view_width,view_height,map__23982,map__23982__$1,scenario,hexes,harbors,swap_number_mode_QMARK_,selected_token_coord,developer_mode_QMARK_,fog_state){
return (function (){
var s__24000__$1 = s__24000;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24000__$1);
if(temp__5804__auto____$1){
var s__24000__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24000__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__24000__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__24002 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__24001 = (0);
while(true){
if((i__24001 < size__5479__auto____$1)){
var vec__24003 = cljs.core._nth(c__5478__auto____$1,i__24001);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24003,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24003,(1),null);
cljs.core.chunk_append(b__24002,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"fill","fill",883462889),catan_board.utils.hex.path_color], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)));

var G__24025 = (i__24001 + (1));
i__24001 = G__24025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24002),catan_board$views$hex$hex_grid_$_iter__23994_$_iter__23999(cljs.core.chunk_rest(s__24000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24002),null);
}
} else {
var vec__24006 = cljs.core.first(s__24000__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24006,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24006,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"fill","fill",883462889),catan_board.utils.hex.path_color], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)),catan_board$views$hex$hex_grid_$_iter__23994_$_iter__23999(cljs.core.rest(s__24000__$2)));
}
} else {
return null;
}
break;
}
});})(i__23996,hex_size__$1,vertices,map__23998,map__23998__$1,coord,c__5478__auto__,size__5479__auto__,b__23997,s__23995__$2,temp__5804__auto__,scenario_config,grid_pattern,hex_size,all_coords,all_pixels,landscape_mode_QMARK_,harbor_placement_coord,editor_mode_QMARK_,draft,display_harbors,padding,vec__23983,center_x,center_y,min_x,max_x,min_y,max_y,view_x,view_y,view_width,view_height,map__23982,map__23982__$1,scenario,hexes,harbors,swap_number_mode_QMARK_,selected_token_coord,developer_mode_QMARK_,fog_state))
,null,null));
});})(i__23996,hex_size__$1,vertices,map__23998,map__23998__$1,coord,c__5478__auto__,size__5479__auto__,b__23997,s__23995__$2,temp__5804__auto__,scenario_config,grid_pattern,hex_size,all_coords,all_pixels,landscape_mode_QMARK_,harbor_placement_coord,editor_mode_QMARK_,draft,display_harbors,padding,vec__23983,center_x,center_y,min_x,max_x,min_y,max_y,view_x,view_y,view_width,view_height,map__23982,map__23982__$1,scenario,hexes,harbors,swap_number_mode_QMARK_,selected_token_coord,developer_mode_QMARK_,fog_state))
;
return iter__5480__auto__(vertices);
})());

var G__24026 = (i__23996 + (1));
i__23996 = G__24026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23997),catan_board$views$hex$hex_grid_$_iter__23994(cljs.core.chunk_rest(s__23995__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23997),null);
}
} else {
var map__24009 = cljs.core.first(s__23995__$2);
var map__24009__$1 = cljs.core.__destructure_map(map__24009);
var coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24009__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
return cljs.core.cons((function (){var hex_size__$1 = catan_board.db.hex_size;
var vertices = catan_board.utils.hex.hex_vertices(coord,hex_size__$1);
var iter__5480__auto__ = ((function (hex_size__$1,vertices,map__24009,map__24009__$1,coord,s__23995__$2,temp__5804__auto__,scenario_config,grid_pattern,hex_size,all_coords,all_pixels,landscape_mode_QMARK_,harbor_placement_coord,editor_mode_QMARK_,draft,display_harbors,padding,vec__23983,center_x,center_y,min_x,max_x,min_y,max_y,view_x,view_y,view_width,view_height,map__23982,map__23982__$1,scenario,hexes,harbors,swap_number_mode_QMARK_,selected_token_coord,developer_mode_QMARK_,fog_state){
return (function catan_board$views$hex$hex_grid_$_iter__23994_$_iter__24010(s__24011){
return (new cljs.core.LazySeq(null,(function (){
var s__24011__$1 = s__24011;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24011__$1);
if(temp__5804__auto____$1){
var s__24011__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24011__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24011__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24013 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24012 = (0);
while(true){
if((i__24012 < size__5479__auto__)){
var vec__24014 = cljs.core._nth(c__5478__auto__,i__24012);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014,(1),null);
cljs.core.chunk_append(b__24013,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"fill","fill",883462889),catan_board.utils.hex.path_color], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)));

var G__24027 = (i__24012 + (1));
i__24012 = G__24027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24013),catan_board$views$hex$hex_grid_$_iter__23994_$_iter__24010(cljs.core.chunk_rest(s__24011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24013),null);
}
} else {
var vec__24017 = cljs.core.first(s__24011__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"fill","fill",883462889),catan_board.utils.hex.path_color], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)),catan_board$views$hex$hex_grid_$_iter__23994_$_iter__24010(cljs.core.rest(s__24011__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(hex_size__$1,vertices,map__24009,map__24009__$1,coord,s__23995__$2,temp__5804__auto__,scenario_config,grid_pattern,hex_size,all_coords,all_pixels,landscape_mode_QMARK_,harbor_placement_coord,editor_mode_QMARK_,draft,display_harbors,padding,vec__23983,center_x,center_y,min_x,max_x,min_y,max_y,view_x,view_y,view_width,view_height,map__23982,map__23982__$1,scenario,hexes,harbors,swap_number_mode_QMARK_,selected_token_coord,developer_mode_QMARK_,fog_state))
;
return iter__5480__auto__(vertices);
})(),catan_board$views$hex$hex_grid_$_iter__23994(cljs.core.rest(s__23995__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(hexes);
})()], null)], null)], null);
});

//# sourceMappingURL=catan_board.views.hex.js.map
