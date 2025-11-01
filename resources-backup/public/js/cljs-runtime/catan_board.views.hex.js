goog.provide('catan_board.views.hex');
/**
 * Creates SVG pattern definitions for resource textures
 */
catan_board.views.hex.resource_pattern = (function catan_board$views$hex$resource_pattern(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"wood-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"#2d5016"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"4,12 7,3 10,12",new cljs.core.Keyword(null,"fill","fill",883462889),"#1a3010"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"y","y",-1757859776),(12),new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"#0d1808"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"14,8 17,0 20,8",new cljs.core.Keyword(null,"fill","fill",883462889),"#1a3010"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(16),new cljs.core.Keyword(null,"y","y",-1757859776),(8),new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#0d1808"], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"brick-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(12),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(12),new cljs.core.Keyword(null,"fill","fill",883462889),"#b8543c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b3c2c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b3c2c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(6),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b3c2c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(6),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b3c2c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(6),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b3c2c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"wheat-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"fill","fill",883462889),"#e8c547"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),(8),new cljs.core.Keyword(null,"y2","y2",-718691301),(8),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#d4a730",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-2),new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"x2","x2",-1362513475),(2),new cljs.core.Keyword(null,"y2","y2",-718691301),(10),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#d4a730",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(6),new cljs.core.Keyword(null,"y1","y1",589123466),(-2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(10),new cljs.core.Keyword(null,"y2","y2",-718691301),(2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#d4a730",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"sheep-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"#9bcd6f"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),(5),new cljs.core.Keyword(null,"cy","cy",755331060),(7),new cljs.core.Keyword(null,"rx","rx",1627208482),2.5,new cljs.core.Keyword(null,"ry","ry",-334598563),(2),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),3.5,new cljs.core.Keyword(null,"cy","cy",755331060),6.5,new cljs.core.Keyword(null,"r","r",-471384190),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(3),new cljs.core.Keyword(null,"cy","cy",755331060),6.2,new cljs.core.Keyword(null,"r","r",-471384190),0.3,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),4.5,new cljs.core.Keyword(null,"y","y",-1757859776),8.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"y","y",-1757859776),8.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),(15),new cljs.core.Keyword(null,"cy","cy",755331060),(5),new cljs.core.Keyword(null,"rx","rx",1627208482),2.5,new cljs.core.Keyword(null,"ry","ry",-334598563),(2),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),13.5,new cljs.core.Keyword(null,"cy","cy",755331060),4.5,new cljs.core.Keyword(null,"r","r",-471384190),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(13),new cljs.core.Keyword(null,"cy","cy",755331060),4.2,new cljs.core.Keyword(null,"r","r",-471384190),0.3,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),14.5,new cljs.core.Keyword(null,"y","y",-1757859776),6.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(16),new cljs.core.Keyword(null,"y","y",-1757859776),6.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),(10),new cljs.core.Keyword(null,"cy","cy",755331060),(15),new cljs.core.Keyword(null,"rx","rx",1627208482),2.5,new cljs.core.Keyword(null,"ry","ry",-334598563),(2),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),8.5,new cljs.core.Keyword(null,"cy","cy",755331060),14.5,new cljs.core.Keyword(null,"r","r",-471384190),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(8),new cljs.core.Keyword(null,"cy","cy",755331060),14.2,new cljs.core.Keyword(null,"r","r",-471384190),0.3,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),9.5,new cljs.core.Keyword(null,"y","y",-1757859776),16.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(11),new cljs.core.Keyword(null,"y","y",-1757859776),16.5,new cljs.core.Keyword(null,"width","width",-384071477),0.4,new cljs.core.Keyword(null,"height","height",1025178622),1.2,new cljs.core.Keyword(null,"fill","fill",883462889),"#333"], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"ore-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"#7c7c7c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"3,6 7,3 9,7 5,9",new cljs.core.Keyword(null,"fill","fill",883462889),"#5c5c5c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"5,4 7,3 8,5",new cljs.core.Keyword(null,"fill","fill",883462889),"#9c9c9c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"13,4 17,2 18,6 14,8",new cljs.core.Keyword(null,"fill","fill",883462889),"#5c5c5c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"14,3 17,2 17,5",new cljs.core.Keyword(null,"fill","fill",883462889),"#9c9c9c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"4,14 8,12 10,16 6,17",new cljs.core.Keyword(null,"fill","fill",883462889),"#5c5c5c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"6,13 8,12 9,14",new cljs.core.Keyword(null,"fill","fill",883462889),"#9c9c9c"], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"desert-pattern",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"fill","fill",883462889),"#d4c4a0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(2),new cljs.core.Keyword(null,"cy","cy",755331060),(2),new cljs.core.Keyword(null,"r","r",-471384190),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"#c4b490"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(18),new cljs.core.Keyword(null,"cy","cy",755331060),(8),new cljs.core.Keyword(null,"r","r",-471384190),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"#c4b490"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(7),new cljs.core.Keyword(null,"cy","cy",755331060),(18),new cljs.core.Keyword(null,"r","r",-471384190),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"#c4b490"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(15),new cljs.core.Keyword(null,"cy","cy",755331060),(15),new cljs.core.Keyword(null,"r","r",-471384190),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"#c4b490"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(10),new cljs.core.Keyword(null,"cy","cy",755331060),(5),new cljs.core.Keyword(null,"r","r",-471384190),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"#c4b490"], null)], null)], null)], null);
});
/**
 * Renders a single hexagonal tile as an SVG polygon.
 * hex-data: {:coord [q r] :resource keyword :number int}
 */
catan_board.views.hex.hex_tile = (function catan_board$views$hex$hex_tile(hex_data){
var map__14354 = hex_data;
var map__14354__$1 = cljs.core.__destructure_map(map__14354);
var coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14354__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14354__$1,new cljs.core.Keyword(null,"resource","resource",251898836));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14354__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var hex_size = catan_board.db.hex_size;
var vertices = catan_board.utils.hex.hex_vertices(coord,hex_size);
var points = catan_board.utils.hex.vertices_to_svg_points(vertices);
var vec__14355 = catan_board.utils.hex.hex_center(coord,hex_size);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(1),null);
var fill = (cljs.core.truth_(resource)?["url(#",cljs.core.name(resource),"-pattern)"].join(''):catan_board.utils.resources.get_resource_color(resource));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["hex-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coord)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(coord))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ffffff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(6)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource,new cljs.core.Keyword(null,"desert","desert",-559764082)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),cx,new cljs.core.Keyword(null,"y","y",-1757859776),cy,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(28),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),"drop-shadow(2px 2px 3px rgba(0,0,0,0.3))"], null)], null),"\uD83C\uDF35"], null):null),(cljs.core.truth_(number)?(function (){var is_red_QMARK_ = catan_board.utils.numbers.is_red_number_QMARK_(number);
var pips = catan_board.utils.numbers.get_probability_pips(number);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"r","r",-471384190),(18),new cljs.core.Keyword(null,"fill","fill",883462889),((is_red_QMARK_)?"#d32f2f":"#f5f5dc"),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#333",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),cx,new cljs.core.Keyword(null,"y","y",-1757859776),(cy - (3)),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"fill","fill",883462889),((is_red_QMARK_)?"#ffffff":"#333"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Arial, sans-serif"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__5480__auto__ = (function catan_board$views$hex$hex_tile_$_iter__14358(s__14359){
return (new cljs.core.LazySeq(null,(function (){
var s__14359__$1 = s__14359;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14359__$1);
if(temp__5804__auto__){
var s__14359__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14359__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14359__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14361 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14360 = (0);
while(true){
if((i__14360 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__14360);
cljs.core.chunk_append(b__14361,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(cx + ((i - ((pips - (1)) / (2))) * (3))),new cljs.core.Keyword(null,"cy","cy",755331060),(cy + (10)),new cljs.core.Keyword(null,"r","r",-471384190),1.5,new cljs.core.Keyword(null,"fill","fill",883462889),((is_red_QMARK_)?"#ffffff":"#333")], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__14382 = (i__14360 + (1));
i__14360 = G__14382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14361),catan_board$views$hex$hex_tile_$_iter__14358(cljs.core.chunk_rest(s__14359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14361),null);
}
} else {
var i = cljs.core.first(s__14359__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(cx + ((i - ((pips - (1)) / (2))) * (3))),new cljs.core.Keyword(null,"cy","cy",755331060),(cy + (10)),new cljs.core.Keyword(null,"r","r",-471384190),1.5,new cljs.core.Keyword(null,"fill","fill",883462889),((is_red_QMARK_)?"#ffffff":"#333")], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),catan_board$views$hex$hex_tile_$_iter__14358(cljs.core.rest(s__14359__$2)));
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
})():null)], null);
});
/**
 * Renders a harbor icon at the specified position
 */
catan_board.views.hex.harbor_icon = (function catan_board$views$hex$harbor_icon(harbor_data){
var map__14362 = harbor_data;
var map__14362__$1 = cljs.core.__destructure_map(map__14362);
var edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14362__$1,new cljs.core.Keyword(null,"edge","edge",919909153));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14362__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14362__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var land_hex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14362__$1,new cljs.core.Keyword(null,"land-hex","land-hex",151922960));
var hex_size = catan_board.db.hex_size;
var vec__14363 = edge;
var coord1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14363,(0),null);
var coord2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14363,(1),null);
var vec__14366 = catan_board.utils.hex.axial_to_pixel(coord1,hex_size);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14366,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14366,(1),null);
var vec__14369 = catan_board.utils.hex.axial_to_pixel(coord2,hex_size);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(1),null);
var mid_x = ((x1 + x2) / (2));
var mid_y = ((y1 + y2) / (2));
var ratio = catan_board.utils.harbors.get_harbor_ratio(type);
var color = catan_board.utils.harbors.get_harbor_color(type);
var resource_icon = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"generic","generic",-1245036524)))?(function (){var G__14372 = type;
var G__14372__$1 = (((G__14372 instanceof cljs.core.Keyword))?G__14372.fqn:null);
switch (G__14372__$1) {
case "wood":
return "\uD83C\uDF32";

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
return "\u26F0\uFE0F";

break;
default:
return "";

}
})():null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["harbor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coord1)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(coord1))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),mid_x,new cljs.core.Keyword(null,"cy","cy",755331060),mid_y,new cljs.core.Keyword(null,"r","r",-471384190),(20),new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ffffff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.9], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),mid_x,new cljs.core.Keyword(null,"y","y",-1757859776),(cljs.core.truth_(resource_icon)?(mid_y - (5)):mid_y),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Arial, sans-serif"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),":1"].join('')], null),(cljs.core.truth_(resource_icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),mid_x,new cljs.core.Keyword(null,"y","y",-1757859776),(mid_y + (10)),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null),resource_icon], null):null)], null);
});
/**
 * Renders the complete hex grid.
 * hexes: vector of hex data maps
 * harbors: vector of harbor data maps
 */
catan_board.views.hex.hex_grid = (function catan_board$views$hex$hex_grid(hexes,harbors){
var hex_size = catan_board.db.hex_size;
var all_coords = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coord","coord",-1453656639),hexes);
var all_pixels = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14373_SHARP_){
return catan_board.utils.hex.axial_to_pixel(p1__14373_SHARP_,hex_size);
}),all_coords);
var min_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,all_pixels));
var max_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,all_pixels));
var min_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,all_pixels));
var max_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,all_pixels));
var padding = (hex_size * (2));
var view_x = (min_x - padding);
var view_y = (min_y - padding);
var view_width = ((max_x - min_x) + (padding * (2)));
var view_height = ((max_y - min_y) + (padding * (2)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_y)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_height)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"800px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.resource_pattern], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__5480__auto__ = (function catan_board$views$hex$hex_grid_$_iter__14374(s__14375){
return (new cljs.core.LazySeq(null,(function (){
var s__14375__$1 = s__14375;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14375__$1);
if(temp__5804__auto__){
var s__14375__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14375__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14375__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14377 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14376 = (0);
while(true){
if((i__14376 < size__5479__auto__)){
var hex_data = cljs.core._nth(c__5478__auto__,i__14376);
cljs.core.chunk_append(b__14377,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.hex_tile,hex_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["hex-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex_data))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex_data)))].join('')], null)));

var G__14384 = (i__14376 + (1));
i__14376 = G__14384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14377),catan_board$views$hex$hex_grid_$_iter__14374(cljs.core.chunk_rest(s__14375__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14377),null);
}
} else {
var hex_data = cljs.core.first(s__14375__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.hex_tile,hex_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["hex-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex_data))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex_data)))].join('')], null)),catan_board$views$hex$hex_grid_$_iter__14374(cljs.core.rest(s__14375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(hexes);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__5480__auto__ = (function catan_board$views$hex$hex_grid_$_iter__14378(s__14379){
return (new cljs.core.LazySeq(null,(function (){
var s__14379__$1 = s__14379;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14379__$1);
if(temp__5804__auto__){
var s__14379__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14379__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14379__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14381 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14380 = (0);
while(true){
if((i__14380 < size__5479__auto__)){
var harbor_data = cljs.core._nth(c__5478__auto__,i__14380);
cljs.core.chunk_append(b__14381,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.harbor_icon,harbor_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["harbor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(harbor_data)))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(harbor_data))))].join('')], null)));

var G__14385 = (i__14380 + (1));
i__14380 = G__14385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14381),catan_board$views$hex$hex_grid_$_iter__14378(cljs.core.chunk_rest(s__14379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14381),null);
}
} else {
var harbor_data = cljs.core.first(s__14379__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.hex.harbor_icon,harbor_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["harbor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(harbor_data)))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(harbor_data))))].join('')], null)),catan_board$views$hex$hex_grid_$_iter__14378(cljs.core.rest(s__14379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(harbors);
})()], null)], null);
});

//# sourceMappingURL=catan_board.views.hex.js.map
