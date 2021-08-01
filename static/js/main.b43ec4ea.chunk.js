(this["webpackJsonpnarrative-visualization"]=this["webpackJsonpnarrative-visualization"]||[]).push([[0],{156:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(42),c=a.n(s),o=(a(156),a(4)),l=a.n(o),i=a(43),d=a(2),u=a(3),p=a(0),b=function(){return Object(p.jsxs)("header",{className:"w-full mx-auto mb-8 space-y-8",children:[Object(p.jsx)("h1",{className:"md:text-3xl lg:text-4xl py-8 text-xl text-center border-0 border-b border-gray-300 shadow",children:"2021 National Basketball Association Statistics"}),Object(p.jsxs)("section",{className:"max-w-screen-2xl px-8 mx-auto space-y-4",children:[Object(p.jsx)("h2",{className:"text-2xl text-center text-gray-500 uppercase",children:"About"}),Object(p.jsxs)("div",{className:"space-y-4 text-left",children:[Object(p.jsxs)("p",{className:"leading-7",children:["The visualization below provides a narrative of the 2021 NBA season in the form of two statistical measures commonly used for forecasting. The data used for this visualization is from FiveThirtyEight and is a subset of the data used to create their article"," ",Object(p.jsxs)("a",{className:"hover:underline text-blue-500",href:"https://projects.fivethirtyeight.com/complete-history-of-the-nba/#bucks",children:["The Complete History of the NBA ",Object(p.jsx)("span",{className:"text-xs",children:"(fivethirtyeight.com)"})]}),"."]}),Object(p.jsxs)("p",{className:"space-x-4 leading-8",children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{children:"Data Source:"})," ",Object(p.jsx)("a",{href:"https://github.com/fivethirtyeight/data/tree/master/nba-forecasts",className:"hover:underline text-blue-500",children:"FiveThirtyEight"}),Object(p.jsxs)("span",{className:"text-xs",children:[" [",Object(p.jsx)("a",{href:"https://projects.fivethirtyeight.com/nba-model/nba_elo.csv",className:"hover:underline text-blue-500",children:"Download CSV"}),"]"]})]}),Object(p.jsx)("span",{children:"|"}),Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{children:"Elo:"})," ",Object(p.jsxs)("a",{className:"hover:underline text-blue-500",href:"https://en.wikipedia.org/wiki/Elo_rating_system",children:["Elo Rating System ",Object(p.jsx)("span",{className:"text-xs",children:"(wikipedia.com)"})]})]}),Object(p.jsx)("span",{children:"|"}),Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{children:"RAPTOR:"})," ",Object(p.jsxs)("a",{className:"hover:underline text-blue-500",href:"https://fivethirtyeight.com/features/how-our-raptor-metric-works/",children:["How Our RAPTOR Metric Works ",Object(p.jsx)("span",{className:"text-xs",children:"(wikipedia.com)"})]})]})]})]})]})]})},f={ATL:"Atlanta Hawks",BRK:"Brooklyn Nets",BOS:"Boston Celtics",CHO:"Charlotte Hornets",CHI:"Chicago Bulls",CLE:"Cleveland Cavaliers",DAL:"Dallas Mavericks",DEN:"Denver Nuggets",DET:"Detroit Pistons",GSW:"Golden State Warriors",HOU:"Houston Rockets",IND:"Indiana Pacers",LAC:"Los Angeles Clippers",LAL:"Los Angeles Lakers",MEM:"Memphis Grizzlies",MIA:"Miami Heat",MIL:"Milwaukee Bucks",MIN:"Minnesota Timberwolves",NOP:"New Orleans Pelicans",NYK:"New York Knicks",OKC:"Oklahoma City Thunder",ORL:"Orlando Magic",PHI:"Philadelphia 76ers",PHO:"Phoenix Suns",POR:"Portland Trail Blazers",SAC:"Sacramento Kings",SAS:"San Antonio Spurs",TOR:"Toronto Raptors",UTA:"Utah Jazz",WAS:"Washington Wizards"},m=(Object.entries(f).map((function(e){var t=Object(d.a)(e,2);return{value:t[0],label:t[1]}})),[{value:"elo",label:"ELO"},{value:"raptor",label:"Raptor"}]),h=["January","February","March","April","May","June","July","August","September","October","November","December"],x=["2021-01","2021-02","2021-03","2021-04","2021-05","2021-06"],j=["p","q","s","c","f"],O={p:"Play-In",q:"Quarter Finals",s:"Semi Finals",c:"Conference Finals",f:"Finals"},g=function(e,t){switch(e){case"elo":return t.teamPostElo;case"raptor":return t.teamPreRaptor;default:return console.error("Unrecognized statistic category:",e),null}},y=function(e){var t=new Date(e),a=t.getFullYear(),r=h[t.getUTCMonth()];return"".concat(r," ").concat(a)},v=function(e){return e.reduce((function(e,t){var a=t.team1,r=t.team2,n=[];return e.includes(a)||n.push(a),e.includes(r)||n.push(r),e.concat(n)}),[]).sort()},w=a(44),N=a(13),S=function(e){var t=e.pathData,a=e.selectedTeam,n=e.team,s=e.updateSelectedTeam,c=n===a,o=Object(r.useState)(!1),l=Object(d.a)(o,2),i=l[0],u=l[1],b=Object(r.useState)(),f=Object(d.a)(b,2),m=f[0],h=f[1],x=Object(r.useState)(),j=Object(d.a)(x,2),O=j[0],g=j[1];return Object(r.useEffect)((function(){if(c||i){var e=t.split("L"),a=e[e.length-1].split(","),r=Object(d.a)(a,2),n=r[0],s=r[1];h(Number(n)+12),g(Number(s)+6)}}),[i,c,t]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("path",{fill:"none",className:"\n                    stroke-current cursor-pointer\n                    transition-all ease-in-out\n                    ".concat(c?"text-gray-600":i?"text-purple-500":"text-gray-200","\n                ").trim(),d:t,strokeWidth:c||i?6:2,onClick:function(){return s(n)},onMouseOver:function(){return u(!0)},onMouseLeave:function(){return u(!1)}}),(c||i)&&m&&O&&Object(p.jsx)("text",{className:"\n                            text-base\n                            ".concat(c?"text-black":"text-purple-800","\n                        ").trim(),transform:"translate(".concat(m,", ").concat(O,")"),children:n})]})},M=function(e){var t=e.data,a=e.selectedTeam,r=e.dataLineFunc,n=e.updateSelectedTeam;return Object(p.jsx)("g",{className:"w-full h-full",id:"data-lines-wrapper",children:t&&t.map((function(e){var t=e.team,s=e.games;return s&&s.length&&Object(p.jsx)(S,{pathData:r(s),selectedTeam:a,team:t,updateSelectedTeam:n},"line-".concat(t))}))})},k=a(9),P=function(e){var t=e.chartHeight,a=e.chartWidth,n=e.x,s=e.y,c=e.gameData,o=Object(r.useRef)(),l=n+200<a?50:-50,i=s<t/2?Math.min(100,t-s-40):Math.max(-100,40-s),d=c||{},b=d.team,f=d.teamScore,m=d.opponent,h=d.opponentScore,x=d.wins,j=d.losses,O=f>h,g=[{x:n,y:s,dy:i,dx:l,note:{label:O?"".concat(b," improves to ").concat(x," - ").concat(j):"".concat(b," slides to ").concat(x," - ").concat(j),title:"".concat(O?"WIN against":"LOSS to"," ").concat(m," (").concat(f," - ").concat(h,")"),bgPadding:20},color:O?"#10B981":"#EF4444"}],y=Object(k.a)().editMode(!0).type(k.b).annotations(g);return Object(r.useEffect)((function(){o&&o.current&&u.h(o.current).call(y)}),[y,o]),Object(p.jsx)("g",{id:"annotations-wrapper",className:"annotation-group",ref:o})},T=function(e){var t=e.chartHeight,a=e.chartWidth,n=e.gameData,s=e.narrativeMode,c=e.scaleX,o=e.scaleY,l=e.stat,i=c(new Date(n.date)),u=o(g(l,n)),b=Object(r.useState)(!1),f=Object(d.a)(b,2),m=f[0],h=f[1],x=n.teamScore>n.opponentScore;return Object(p.jsxs)("g",{onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},children:[m&&!s&&Object(p.jsx)(P,{chartHeight:t,chartWidth:a,x:i,y:u,gameData:n}),Object(p.jsx)("circle",{className:"".concat(x?"text-green-500":"text-red-500"," cursor-pointer fill-current animate-pulse"),cx:i,cy:u,r:7}),Object(p.jsx)("circle",{className:"text-white cursor-pointer fill-current",cx:i,cy:u,r:5}),Number(n.teamScore)>Number(n.opponentScore)&&Object(p.jsx)("circle",{className:"".concat(x?"text-green-500":"text-red-500"," animate-pulse cursor-pointer fill-current"),cx:i,cy:u,r:3})]})},D=function(e){var t=e.chartHeight,a=e.chartWidth,r=e.data,n=e.narrativeMode,s=e.scaleX,c=e.scaleY,o=e.stat;return Object(p.jsx)("g",{className:"w-full h-full",id:"data-points-wrapper",children:r&&r.map((function(e){return Object(p.jsx)(T,{chartHeight:t,chartWidth:a,gameData:e,narrativeMode:n,scaleX:s,scaleY:c,stat:o},"game-data-".concat(e.date))}))})},E=function(e){var t=e.gameData,a=e.scaleX,n=e.scaleY,s=e.stat,c=Object(r.useRef)(),o=t.map((function(e){var t=e.date,r=e.title,c=e.label,o=e.dx,l=e.dy;return{x:a(new Date(t)),y:n(g(s,e)),dx:o,dy:l,note:{label:c,title:r,bgPadding:{top:10,bottom:10,left:10,right:10}},color:"black"}})),l=Object(k.a)().editMode(!0).notePadding(15).type(k.b).annotations(o);return Object(r.useEffect)((function(){c&&c.current&&u.h(c.current).call(l)}),[l,c]),Object(p.jsx)("g",{id:"annotations-wrapper",className:"annotation-group",ref:c})},R=[{team:"LAL",date:"2021-01-01",title:"Lakers Continue Dominance",label:"The LA Lakers picked off right where they left off after winning the championship last season.",dx:50,dy:200},{team:"LAC",date:"2021-01-31",title:"Clippers Raising",label:"The LA Clippers begins to show some promise, securing the best record in the league at 16-5.",dx:50,dy:200},{team:"UTA",date:"2021-02-17",title:"Utah Jazz Shine",label:"The Utah Jazz go on a 20-1 run to become the undisputed best team in the NBA early on in the season.",dx:100,dy:100},{team:"UTA",date:"2021-05-16",title:"End of Regular Season",label:"The Utah Jazz finish the regular season with the best record in the NBA (52 - 20) and the first seed in the Western Conference.",dx:-20,dy:100}],A=[{team:"MEM",date:"2021-05-21",playoffRound:"p",title:"Memphis Grizzlies Make Playoffs",label:"In the first play-in tournament ever, the Memphis Grizzlies upset 8th seed Golden State Warriors and advance to the playoffs.",dx:50,dy:100},{team:"BRK",date:"2021-06-01",playoffRound:"q",title:"Brooklyn Nets Dominant",label:"The Brooklyn Nets defeat Boston 4-1, emerging as the favorites in the East.",dx:25,dy:100},{team:"LAC",date:"2021-06-18",playoffRound:"s",title:"Clippers Upset Jazz",label:"The West's 1 seed Utah Jazz lose 4 straight to the LA Clippers and exit early from the playoffs.",dx:-120,dy:30},{team:"MIL",date:"2021-06-19",playoffRound:"s",title:"Bucks Best Nets",label:"The Milwaukee Bucks overcome an injured Brooklyn Nets in 7 games.",dx:-100,dy:250},{team:"ATL",date:"2021-06-20",playoffRound:"s",title:"Atlanta Upsets 76ers",label:"The young Atlanta Hawks pull off a game 7 win against 1st seed Philadelphia 76ers.",dx:40,dy:280},{team:"PHO",date:"2021-06-30",playoffRound:"c",title:"Phoenix Cruises to Finals",label:"The Phoenix Suns take advantage of a key injury on the Clippers and deliver a convincing win to advance from the West.",dx:-20,dy:150},{team:"MIL",date:"2021-07-03",playoffRound:"c",title:"Bucks Advance to Finals",label:"The Milwaukee Bucks take care of business and beat the Hawks in 6 games.",dx:80,dy:100},{team:"PHO",date:"2021-07-08",playoffRound:"f",title:"Phoenix Starts Strong",label:"The Phoenix Suns go up 2-0, taking a commanding lead in the NBA Finals.",dx:140,dy:200},{team:"MIL",date:"2021-07-20",playoffRound:"f",title:"Milwaukee Wins Championship",label:"The Milwaukee Bucks cap off a 4-0 run to win the 2021 NBA Championship over the Suns.",dx:80,dy:60}],C=800,L=800,_=64,B=function(e){var t=e.seasonDataByTeam,a=e.regularSeasonGames,n=e.playoffGames,s=e.playoffRound,c=e.maxDate,o=e.narrativeMode,l=e.rawData,i=e.selectedTeam,b=e.showOnlyPlayoffs,f=e.stat,m=e.updateSelectedTeam,h=C,x=L,O=_,y=Object(r.useRef)(),v=Object(r.useState)({}),S=Object(d.a)(v,2),k=S[0],P=S[1],T=Object(r.useState)(),B=Object(d.a)(T,2),z=B[0],G=B[1],H=Object(r.useState)(),F=Object(d.a)(H,2),W=F[0],I=F[1],U=Object(r.useState)(),J=Object(d.a)(U,2),Y=J[0],K=J[1],X=Object(r.useState)(),q=Object(d.a)(X,2),V=q[0],Q=q[1],Z=Object(r.useState)((function(){return function(){}})),$=Object(d.a)(Z,2),ee=$[0],te=$[1],ae=Object(r.useState)((function(){return function(){}})),re=Object(d.a)(ae,2),ne=re[0],se=re[1],ce=Object(r.useState)((function(){return function(){}})),oe=Object(d.a)(ce,2),le=oe[0],ie=oe[1],de=Object(r.useState)([]),ue=Object(d.a)(de,2),pe=ue[0],be=ue[1];return Object(r.useEffect)((function(){var e=function(){if(y&&y.current){var e=Math.max(x,y.current.parentElement.clientWidth-O),t=Math.min(h,1.2*e);G(e),I(t)}};return z||W||e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[y,O,z,W,x,h]),Object(r.useEffect)((function(){var e=function(e){return e.reduce((function(e,t){var a=t.elo1_pre,r=t.elo2_pre,n=t.elo1_post,s=t.elo2_post,c=t.raptor1_pre,o=t.raptor2_pre;return{eloMin:Math.min(e.eloMin,a,r,n,s),eloMax:Math.max(e.eloMax,a,r,n,s),raptorMin:Math.min(e.raptorMin,c,o),raptorMax:Math.max(e.raptorMax,c,o)}}),{eloMin:99999,eloMax:0,raptorMin:99999,raptorMax:0})}(l);P(e)}),[l]),Object(r.useEffect)((function(){var e=u.h(y.current).select("#chart-wrapper").attr("transform","translate(".concat(O,", 0)")),t=b?n:a;if(t){var r=u.d(t,(function(e){return new Date(e.date)})),s=r[1].setDate(r[1].getDate()+10),c=u.g().domain([r[0],s]).range([0,z-O]),o=u.a(c).ticks(u.i,"'%y %b %d").tickSize(-W+O);e.select("#x-axis").select("*").remove();var l=e.select("#x-axis").attr("transform","translate(0, ".concat(W-O,")")).call(o);l.select(".domain").attr("class",""),l.selectAll("line").attr("class","text-gray-200"),l.selectAll("text").attr("class","text-base text-gray-500 transform -rotate-90 text-right").attr("y",-6).attr("x",10-O);var i=u.f().domain(function(e,t){var a=function(e){return.99*Number(e)},r=function(e){return 1.02*Number(e)};switch(e){case"elo":return[a(t.eloMin),r(t.eloMax)];case"raptor":return[a(t.raptorMin),r(t.raptorMax)];case"score":return[a(t.scoreMin),r(t.scoreMax)];default:return console.error("No bounds found for stat:",e),[0,0]}}(f,k)).range([W-O,0]),d=u.b(i).ticks(5).tickPadding(20).tickSize(-z+O);e.select("#y-axis").select("*").remove();var p=e.select("#y-axis").call(d);p.select(".domain").remove(),p.selectAll("line").attr("class","text-gray-200"),p.selectAll("text").attr("class","text-base text-gray-800");var m=u.e().x((function(e){return c(new Date(e.date))})).y((function(e){return i(g(f,e))}));te((function(){return c})),se((function(){return i})),ie((function(){return m}))}}),[k,W,z,O,f,b,n,a]),Object(r.useEffect)((function(){if(o&&t){var e=Object.values(t).reduce((function(e,t){if(!t.length)return e;var a=t[t.length-1];return Number(a.teamPostElo)>Number(e.teamPostElo)?a:e}),{teamPostElo:0});if(e&&e.team&&m(e.team),b){var r=A.filter((function(e){return j.indexOf(e.playoffRound)<=j.indexOf(s)})).map((function(e){var t=n.find((function(t){return t.date===e.date&&(t.team1===e.team||t.team2===e.team)})),a=t.team1===e.team;return Object(N.a)(Object(N.a)({},e),{},{teamPostElo:a?t.elo1_post:t.elo2_post,teamPreRaptor:a?t.raptor1_pre:t.raptor2_pre,teamScore:a?t.score1:t.score2,opponentScore:a?t.score2:t.score1})}));Q(r)}else{var l=R.filter((function(e){return new Date(e.date)<=new Date(c)})).map((function(e){var t=a.find((function(t){return t.date===e.date&&(t.team1===e.team||t.team2===e.team)})),r=t.team1===e.team;return Object(N.a)(Object(N.a)({},e),{},{teamPostElo:r?t.elo1_post:t.elo2_post,teamPreRaptor:r?t.raptor1_pre:t.raptor2_pre,teamScore:r?t.score1:t.score2,opponentScore:r?t.score2:t.score1})}));Q(l)}}}),[l,o,t,m,c,b,s,n,a]),Object(r.useEffect)((function(){if(t){var e=Object.entries(t).reduce((function(e,t){var a=e.selectedTeamData,r=e.orderedData,n=Object(d.a)(t,2),s=n[0],c=n[1];return s===i?{selectedTeamData:{team:s,games:c},orderedData:r}:{selectedTeamData:a,orderedData:r.concat({team:s,games:c})}}),{selectedTeamData:null,orderedData:[]}),a=e.orderedData,r=e.selectedTeamData;be(r),K([].concat(Object(w.a)(a),[r]).filter((function(e){return e})))}}),[t,i,o]),Object(p.jsx)("svg",{className:"w-full h-full transition-all ease-in-out",ref:y,width:z,height:W&&W+O,children:z&&W&&Object(p.jsxs)("g",{id:"chart-wrapper",children:[Object(p.jsx)("g",{id:"x-axis",className:""}),Object(p.jsx)("g",{id:"y-axis",className:""}),Y&&Object(p.jsxs)("g",{className:"w-full h-full",children:[Object(p.jsx)(M,{data:Y,selectedTeam:i,dataLineFunc:le,updateSelectedTeam:m}),pe&&Object(p.jsx)(D,{chartHeight:W,chartWidth:z,data:o?V:pe.games,narrativeMode:o,scaleX:ee,scaleY:ne,stat:f}),o&&V&&Object(p.jsx)(E,{gameData:V,scaleX:ee,scaleY:ne,stat:f})]})]})})},z=function(e){var t=e.maxDate,a=e.narrativeMode,r=e.playoffRound,n=e.selectedStat,s=e.selectedTeam,c=e.showOnlyPlayoffs,o=e.teamOptions,l=e.updateMaxDate,i=e.updateNarrativeMode,d=e.updatePlayoffRound,u=e.updateSelectedStat,b=e.updateSelectedTeam,h=e.updateShowOnlyPlayoffs;return Object(p.jsxs)("section",{className:"flex-nowrap border-b-300 flex w-full pb-4 border-0 border-b",children:[Object(p.jsxs)("div",{className:"flex flex-col pr-4 space-y-4 border-0 border-r border-gray-200",children:[Object(p.jsxs)("label",{className:"flex flex-col space-y-2",children:[Object(p.jsx)("span",{className:"text-sm font-medium text-gray-500 uppercase",children:"Visualization Mode"}),Object(p.jsxs)("button",{className:"nowrap w-max-content flex overflow-hidden leading-tight text-gray-800 border rounded-full shadow-sm",onClick:function(){return i(!a)},children:[Object(p.jsx)("span",{className:"block px-3 py-2 w-32 ".concat(a?"text-white bg-green-600 shadow":"bg-gray-100 text-gray-400 shadow-inner"),children:"Narrative"}),Object(p.jsx)("span",{className:"block px-3 py-2 w-32 ".concat(a?"bg-gray-100 text-gray-400 shadow-inner":"text-white bg-green-600 shadow"),children:"Exploration"})]})]}),Object(p.jsxs)("dl",{className:"flex flex-col space-y-4",children:[Object(p.jsxs)("div",{className:"space-y-2",children:[Object(p.jsx)("dt",{className:"font-semibold",children:"Narrative Mode"}),Object(p.jsx)("dd",{className:"",children:"Narrative Mode walks you through the story of the 2021 NBA regular season or playoffs."})]}),Object(p.jsxs)("div",{className:"space-y-2",children:[Object(p.jsx)("dt",{className:"font-semibold",children:"Exploration Mode"}),Object(p.jsx)("dd",{className:"",children:"Exploration Mode allows you to explore the 2021 NBA season using Elo or Raptor statistics for any given team."})]})]}),!a&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"flex-nowrap flex items-center space-x-10",children:[Object(p.jsx)("div",{className:"w-20 h-0.5 bg-gray-300 hover:bg-purple-500 hover:h-1.5 cursor-pointer"}),Object(p.jsx)("span",{children:"Hover over lines to see that team, click on line to select."})]}),Object(p.jsxs)("div",{className:"flex-nowrap flex items-center space-x-10",children:[Object(p.jsxs)("div",{className:"flex justify-around w-20",children:[Object(p.jsx)("div",{className:"flex items-center justify-center w-3.5 h-3.5 border-2 border-green-500 rounded-full animate-pulse cursor-pointer",children:Object(p.jsx)("div",{className:"animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full"})}),Object(p.jsx)("div",{className:"flex items-center justify-center w-3.5 h-3.5 border-2 border-red-500 rounded-full cursor-pointer"})]}),Object(p.jsx)("span",{children:"Hover over data points to see more information about the game."})]})]})]}),Object(p.jsxs)("div",{className:"w-96 flex flex-col flex-grow px-4 space-y-4",children:[Object(p.jsxs)("label",{className:"flex flex-col space-y-2",children:[Object(p.jsx)("span",{className:"text-sm font-medium text-gray-500 uppercase",children:"Show Games From"}),Object(p.jsxs)("button",{className:"nowrap w-max-content flex overflow-hidden leading-tight text-gray-800 border rounded-full shadow-sm",onClick:function(){return h(!c)},children:[Object(p.jsx)("span",{className:"block px-3 py-2 w-40 ".concat(c?"bg-gray-100 text-gray-400 shadow-inner":"text-white bg-green-600 shadow"),children:"Regular Season"}),Object(p.jsx)("span",{className:"block px-3 py-2 w-40 ".concat(c?"text-white bg-green-600 shadow":"bg-gray-100 text-gray-400 shadow-inner"),children:"Playoffs"})]})]}),Object(p.jsxs)("label",{className:"flex flex-col space-y-2",children:[Object(p.jsx)("span",{className:"text-sm font-medium text-gray-500 uppercase",children:"Statistic"}),Object(p.jsx)("select",{id:"statistic-select",className:"disabled:cursor-not-allowed px-3 py-2 leading-tight text-gray-800 border rounded shadow cursor-pointer",onChange:function(e){var t=e.target;return u(t.value)},value:n,children:m.map((function(e){return Object(p.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),!a&&Object(p.jsxs)("label",{className:"flex flex-col space-y-2",children:[Object(p.jsx)("span",{className:"text-sm font-medium text-gray-500 uppercase",children:"Team"}),Object(p.jsxs)("select",{id:"team-select",className:"disabled:cursor-not-allowed px-3 py-2 leading-tight text-gray-800 border rounded shadow",onChange:function(e){var t=e.target;return b(t.value)},value:s,disabled:a,children:[Object(p.jsx)("option",{value:"",children:"All"}),o.map((function(e){return Object(p.jsx)("option",{value:e,children:f[e]},e)}))]})]}),!c&&Object(p.jsxs)("div",{className:"flex-nowrap flex items-end space-x-2",children:[Object(p.jsx)("button",{className:"disabled:cursor-not-allowed disabled:text-gray-200 w-max-content hover:bg-green-500 disabled:bg-gray-300 px-3 py-2 leading-tight text-white transition-colors duration-100 bg-green-600 border rounded shadow",disabled:x.indexOf(t)<=0,onClick:function(){var e=x.indexOf(t)-1;l(x[e])},children:"< Prev"}),Object(p.jsxs)("label",{className:"flex flex-col space-y-2",children:[Object(p.jsx)("span",{className:"text-sm font-medium text-gray-500 uppercase",children:"Games Up To"}),Object(p.jsxs)("select",{id:"statistic-select",className:"px-3 py-2 leading-tight text-gray-800 border rounded shadow",onChange:function(e){var t=e.target;return l(t.value)},value:t,children:[Object(p.jsx)("option",{value:x[x.length-1],children:"Regular Season"},"all-option"),x.map((function(e){return Object(p.jsx)("option",{value:e,children:y(e)},e)}))]})]}),Object(p.jsx)("button",{className:"disabled:cursor-not-allowed disabled:text-gray-200 w-max-content hover:bg-green-500 disabled:bg-gray-300 px-3 py-2 leading-tight text-white transition-colors duration-100 bg-green-600 border rounded shadow",disabled:!t,onClick:function(){if(x.indexOf(t)>=x.length-1)d("p"),h(!0);else{var e=x.indexOf(t)+1;l(x[e])}},children:x.indexOf(t)>=x.length-1?"Playoffs >":"Next >"})]}),c&&Object(p.jsxs)("div",{className:"flex-nowrap flex items-end space-x-2",children:[Object(p.jsx)("button",{className:"disabled:cursor-not-allowed disabled:text-gray-200 w-max-content hover:bg-green-500 disabled:bg-gray-300 px-3 py-2 leading-tight text-white transition-colors duration-100 bg-green-600 border rounded shadow",onClick:function(){0===j.indexOf(r)?(l(x[x.length-1]),h(!1)):d(j[j.indexOf(r)-1])},children:0===j.indexOf(r)?"< Season":"< Prev"}),Object(p.jsxs)("label",{className:"flex flex-col space-y-2",children:[Object(p.jsx)("span",{className:"text-sm font-medium text-gray-500 uppercase",children:"Playoff Round"}),Object(p.jsx)("select",{id:"statistic-select",className:"w-48 px-3 py-2 leading-tight text-gray-800 border rounded shadow",onChange:function(e){var t=e.target;return d(t.value)},value:r,children:j.map((function(e){return Object(p.jsx)("option",{value:e,children:O[e]},e)}))})]}),Object(p.jsx)("button",{className:"disabled:cursor-not-allowed disabled:text-gray-200 w-max-content hover:bg-green-500 disabled:bg-gray-300 px-3 py-2 leading-tight text-white transition-colors duration-100 bg-green-600 border rounded shadow",disabled:j.indexOf(r)>=j.length-1,onClick:function(){d(j[j.indexOf(r)+1])},children:"Next >"})]})]})]})},G=function(e){var t=e.narrativeMode;return Object(p.jsx)("div",{className:"flex justify-center w-full py-3",children:Object(p.jsxs)("div",{className:"flex-nowrap flex space-x-4",children:[Object(p.jsxs)("div",{className:"flex items-center space-x-2",children:[Object(p.jsx)("div",{className:"flex items-center justify-center w-3.5 h-3.5 border-2 border-green-500 rounded-full animate-pulse",children:Object(p.jsx)("div",{className:"animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full"})}),Object(p.jsx)("span",{children:"Win"})]}),Object(p.jsxs)("div",{className:"flex items-center space-x-2",children:[Object(p.jsx)("div",{className:"flex items-center justify-center w-3.5 h-3.5 border-2 border-red-500 rounded-full"}),Object(p.jsx)("span",{children:"Loss"})]}),Object(p.jsxs)("div",{className:"flex items-center space-x-2",children:[Object(p.jsx)("div",{className:"w-10 h-1.5 bg-gray-700"}),Object(p.jsx)("span",{children:t?"Team with highest statistic value as of selected timeframe":"Selected team"})]})]})})},H=function(e){var t=e.data,a=Object(r.useState)(!0),n=Object(d.a)(a,2),s=n[0],c=n[1],o=Object(r.useState)("elo"),l=Object(d.a)(o,2),i=l[0],u=l[1],b=Object(r.useState)("MIL"),m=Object(d.a)(b,2),h=m[0],x=m[1],O=Object(r.useState)("2021-01"),g=Object(d.a)(O,2),y=g[0],w=g[1],N=Object(r.useState)(!1),S=Object(d.a)(N,2),M=S[0],k=S[1],P=Object(r.useState)(),T=Object(d.a)(P,2),D=T[0],E=T[1],R=Object(r.useState)(),A=Object(d.a)(R,2),C=A[0],L=A[1],_=Object(r.useState)(),H=Object(d.a)(_,2),F=H[0],W=H[1],I=Object(r.useState)(),U=Object(d.a)(I,2),J=U[0],Y=U[1],K=Object(r.useState)([]),X=Object(d.a)(K,2),q=X[0],V=X[1],Q=Object(r.useState)([]),Z=Object(d.a)(Q,2),$=Z[0],ee=Z[1];Object(r.useEffect)((function(){var e=Object.keys(f).reduce((function(e,a){var r=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"2021";return e.reduce((function(e,c){if(c.season!==s)return e;if(!r&&c.playoff)return e;if(r&&(!c.playoff||j.indexOf(c.playoff)>j.indexOf(n)))return e;if(!r&&a&&a&&new Date(a)<new Date(c.date))return e;var o=e.length>0?e[e.length-1]:{wins:0,losses:0};if(c.team1===t){var l=Number(c.score1),i=Number(c.score2),d={date:c.date,playoff:c.playoff,team:c.team1,teamScore:l,teamPreElo:c.elo1_pre,teamPostElo:c.elo1_post,teamPreRaptor:c.raptor1_pre,teamRaptorProb:c.raptor_prob1,opponent:c.team2,opponentScore:i,opponentPreElo:c.elo2_pre,opponentPostElo:c.elo2_post,opponentPreRaptor:c.raptor2_pre,opponentRaptorProb:c.raptor_prob2,wins:l>i?o.wins+1:o.wins,losses:l<i?o.losses+1:o.losses};return e.concat(d)}if(c.team2===t){var u=Number(c.score2),p=Number(c.score1),b={date:c.date,playoff:c.playoff,team:c.team2,teamScore:u,teamPreElo:c.elo2_pre,teamPostElo:c.elo2_post,teamPreRaptor:c.raptor2_pre,teamRaptorProb:c.raptor_prob2,opponent:c.team1,opponentScore:p,opponentPreElo:c.elo1_pre,opponentPostElo:c.elo1_post,opponentPreRaptor:c.raptor1_pre,opponentRaptorProb:c.raptor_prob1,wins:u>p?o.wins+1:o.wins,losses:u<p?o.losses+1:o.losses};return e.concat(b)}return e}),[])}(t,a,y,M,D);return e[a]=r,e}),{});L(e)}),[t,y,M,D]),Object(r.useEffect)((function(){var e=t.reduce((function(e,t){return t.playoff?{rGames:e.rGames,pGames:e.pGames.concat(t)}:{rGames:e.rGames.concat(t),pGames:e.pGames}}),{rGames:[],pGames:[]}),a=e.rGames,r=e.pGames;W(a),Y(r)}),[t]),Object(r.useEffect)((function(){if(F){var e=v(F);V(e)}if(J){var t=v(J);ee(t)}}),[F,J]);return Object(p.jsxs)("div",{className:"max-w-screen-2xl flex flex-col items-center w-full p-8 mx-auto space-y-4 border rounded shadow",children:[Object(p.jsx)(z,{maxDate:y,narrativeMode:s,playoffRound:D,selectedStat:i,selectedTeam:h,showOnlyPlayoffs:M,teamOptions:M?$:q,updateMaxDate:w,updateNarrativeMode:function(e){e&&(u("elo"),x(""),k(!1),E(null)),c(e)},updatePlayoffRound:E,updateSelectedStat:u,updateSelectedTeam:x,updateShowOnlyPlayoffs:function(e){k(e),E(e?"p":null)}}),Object(p.jsx)(G,{narrativeMode:s}),Object(p.jsx)(B,{rawData:t,seasonDataByTeam:C,regularSeasonGames:F,playoffGames:J,showOnlyPlayoffs:M,playoffRound:D,maxDate:y,narrativeMode:s,stat:i,selectedTeam:h,updateSelectedTeam:function(e){return x(e)}})]})};var F=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(),c=Object(d.a)(s,2),o=c[0],f=c[1],m=function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)(t);case 2:a=e.sent,n(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){try{m("https://projects.fivethirtyeight.com/nba-model/nba_elo_latest.csv")}catch(e){console.error(e),f(e)}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b,{}),Object(p.jsx)("main",{className:"md:px-4 lg:px-8 w-full px-2 pb-8 mx-auto",children:Object(p.jsxs)("section",{className:"",children:[o&&Object(p.jsx)("div",{children:"There was an error loading the data"}),!o&&a.length&&Object(p.jsx)(H,{data:a})]})})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,161)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),W()}},[[159,1,2]]]);
//# sourceMappingURL=main.b43ec4ea.chunk.js.map