function onLoad(e)

{}

// Dies ist die Funktion, die du beim Erstellen der Schaltflaeche aufrufen. Diese wird spaeter unter Funktionsnamen eingetragen
function RFCButton(e)

{
    var formContext = e;
    var thisId = formContext.data.entity.getId().replace("{", "").replace("}", "");
    debugger;

   var pageInput = {

        pageType: "custom", // Gibt an, welchen Seitentyp du oeffnen moechtest (google: xrm.navigation) 
        name: "new_rfcantrag_0fcc0", // Hier kommt der Namen der Power Page rein
        entityName: "msdyn_project", // Hier kommt die Entitaet rein, welche die Informationen erhaelt. 
        recordId: thisId // Die Datensatz-ID wird der obigen Variable formContext entnommen. Auf diese Weise verknuepfe ich die einzelnen Datensaetze

   };

	// Lege die Navigationsoptionen fest. Hinweis: Die Position ist standardmaeßig auf 1 (modal) eingestellt, Sie koennen jedoch auch 2 (side pane, right hand side)) auswählen.
	// Beachte außerdem, dass du Prozentsaetze für die Breiten- und Hoeheneinheiten verwenden koennen. Dies ist für diese Anwendung praktisch. Es bedeutet, dass es sich je nach Bildschirmgroeße aendert
   
   var navigationOptions = {

       target: 2,
        position: 1,
        width: {
            value: 90,
            unit: "%"
        },

       height: {
            value: 90,
            unit: "%"
        },

       title: "Erstellung RFC" // Beschriftung in der Topbar der Seite
    };

   // Hier wird der Wer uebergeben - mehr unter (google: xrm.navigation) 

   Xrm.Navigation.navigateTo(pageInput, navigationOptions).then();
}