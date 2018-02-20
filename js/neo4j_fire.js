/**************************
* Includes all neo4J used-Functions
 
 get_neo_data()			->	fills terminal and results
 simple_commit(commit)	->	fills terminal and results
 
 
 
**************************/
function get_neo_data(){
	$.ajax({
		type: "POST",
		url: "http://localhost:7474/db/data/transaction/commit",
		accepts: { json: "application/json" },
		dataType: "json",
		contentType:"application/json",
		data: JSON.stringify({
			"statements" : [ {
			"statement" : "MATCH (n) RETURN n",
			"resultDataContents" : [ "row", "graph" ]
			} ]
		}),
		success: function(data, textStatus, jqXHR){
			//alert(textStatus);
			console.log(data);
			content = "";
			$("#terminal").text("MATCH (n) RETURN n");
			for(key in data["results"][0].data){
				content += (key+". "+data["results"][0].data[key].row[0].name+"; ");
			}
			if(content!="") $("#result").text(content);
			else $("#result").text("Neo4J Database is empty");
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(thrownError);
		}
	});
}

function simple_commit(commit){
	return $.ajax({
		type: "POST",
		url: "http://localhost:7474/db/data/transaction/commit",
		accepts: { json: "application/json" },
		dataType: "json",
		contentType:"application/json",
		data: JSON.stringify({
			"statements" : [ {
			"statement" : commit,
			"resultDataContents" : [ "row", "graph" ]
			} ]
		}),
		success: function(data, textStatus, jqXHR){
			//alert(textStatus);
			for(key in data["results"]){
				$("#terminal").val(commit);
				$("#result").text("<- Command is successfully completed");
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(thrownError);
		}
	});
}

function visData(commit){
	return $.ajax({
		type: "POST",
		url: "http://localhost:7474/db/data/transaction/commit",
		accepts: { json: "application/json" },
		dataType: "json",
		contentType:"application/json",
		data: JSON.stringify({
			"statements" : [ {
			"statement" : "MATCH path = (n)-[r]->(m) RETURN path",
			"resultDataContents": ["graph"]
			} ]
		}),
		success: function(data, textStatus, jqXHR){
			console.log(data);
			function idIndex(a,id) {
				for (var i=0;i<a.length;i++) {
					if (a[i].id == id) return i;}
				return null;
			}
			var nodes=[], links=[];
			data.results[0].data.forEach(function (row) {
				row.graph.nodes.forEach(function (n) {
					if (idIndex(nodes,n.id) == null)
					nodes.push({id:n.id,label:n.labels[0],name:n.properties.name});
				});
				links = links.concat( row.graph.relationships.map(function(r) {
					return {source:idIndex(nodes,r.startNode),target:idIndex(nodes,r.endNode),type:r.type};
				}));
			});
			viz = {nodes:nodes, links:links};
			
			//-------drawing---------------------------------------------------------------------------
			var color = d3.scale.category20();
			//Constants for the SVG
			var width = 960,
			height = 960

			var svg = d3.select("#action_area").append("svg")
				.attr("width", width)
				.attr("height", height);
			var force = d3.layout.force()
				.gravity(.05)
				.distance(100)
				.charge(-100)
				.size([width, height]);
			//graph = viz;
			//var mis = document.getElementById('mis').innerHTML;
			//console.log(mis);
			console.log(viz);
			graph = viz;

			force
				.nodes(graph.nodes)
				.links(graph.links)
				.start()
				.on('end', function() {// layout is done
					$('.tooltip').tooltipster("show");
				});

			var link = svg.selectAll(".link")
				.data(graph.links)
				.enter().append("line")
				.attr("class", "link tooltip")
				.attr("title", (function(e) { return e.type }));

			var node = svg.selectAll(".node")
				.data(graph.nodes)
				.enter().append("g")
				.attr("class", "node")
				.call(force.drag);

			node.append("circle")
				.attr("class", "node")
				.attr("r", 8).style("fill", function (d) {
					return color(d.group);
				})

			node.append("text")
				.attr("dx", 12)
				.attr("dy", ".35em")
				.text(function(d) { return d.name });
			

			force.on("tick", function() {
				link.attr("x1", function(d) { return d.source.x; })
					.attr("y1", function(d) { return d.source.y; })
					.attr("x2", function(d) { return d.target.x; })
					.attr("y2", function(d) { return d.target.y; });

				node.attr("transform", function(d) { 
					return "translate(" + d.x + "," + d.y + ")"; 
				});
			});
			$('.tooltip').tooltipster();
			
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(thrownError);
		}
	});
}

function moddedVisData(commit){
	return $.ajax({
		type: "POST",
		url: "http://localhost:7474/db/data/transaction/commit",
		accepts: { json: "application/json" },
		dataType: "json",
		contentType:"application/json",
		data: JSON.stringify({
			"statements" : [ {
			"statement" : "MATCH (n) RETURN n",
			"resultDataContents": ["graph"]
			} ]
		}),
		success: function(data, textStatus, jqXHR){
			console.log(data);
			function idIndex(a,id) {
				for (var i=0;i<a.length;i++) {
					if (a[i].id == id) return i;}
				return null;
			}
			var nodes=[], links=[];
			data.results[0].data.forEach(function (row) {
				row.graph.nodes.forEach(function (n) {
					if (idIndex(nodes,n.id) == null)
					nodes.push({id:n.id,label:n.labels[0],name:n.properties.name});
				});
				links = links.concat( row.graph.relationships.map(function(r) {
					return {source:idIndex(nodes,r.startNode),target:idIndex(nodes,r.endNode),type:r.type};
				}));
			});
			viz = {nodes:nodes, links:links};
			
			//-------drawing---------------------------------------------------------------------------
			var color = d3.scale.category20();
			//Constants for the SVG
			var width = 960,
			height = 960

			var svg = d3.select("#action_area").append("svg")
				.attr("width", width)
				.attr("height", height);

			var force = d3.layout.force()
				.gravity(.05)
				.distance(100)
				.charge(-100)
				.size([width, height]);
			//graph = viz;
			//var mis = document.getElementById('mis').innerHTML;
			//console.log(mis);
			console.log(viz);
			graph = viz;

			force
				.nodes(graph.nodes)
				.links(graph.links)
				.start()
				.on('end', function() {// layout is done
					$('.tooltip').tooltipster("show");
				});

			var link = svg.selectAll(".link")
				.data(graph.links)
				.enter().append("line")
				.attr("class", "link tooltip")
				.attr("title", (function(e) { return e.type }));

			var node = svg.selectAll(".node")
				.data(graph.nodes)
				.enter().append("g")
				.attr("class", "node")				
				.call(force.drag);

			node.append("circle")
				.attr("class", "node")
				.attr("r", 8).style("fill", function (d) {
					return color(d.group);
				})

			node.append("text")
				.attr("dx", 12)
				.attr("dy", ".35em")
				.on("click", function(d,i) { alert("Hello world"); })
				.text(function(d) { return d.name });

			
			force.on("tick", function() {
				link.attr("x1", function(d) { return d.source.x; })
					.attr("y1", function(d) { return d.source.y; })
					.attr("x2", function(d) { return d.target.x; })
					.attr("y2", function(d) { return d.target.y; });

				node.attr("transform", function(d) { 
					return "translate(" + d.x + "," + d.y + ")"; 
				});
			});
			$('.tooltip').tooltipster();
			
			//----------------------------------------------------
			$(".node").bind('contextmenu', function(e) {
				target = prompt("want connection to?","");
				role = prompt("role?","");
				$("#terminal").text(`MATCH (source:Server) WHERE source.name = "`+$(this).after().html()+`" MATCH (target:Server) WHERE target.name = "`+target+`" CREATE (source)-[:`+role+`]->(target);`);
				
			});
			
			
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(thrownError);
		}
	});
}