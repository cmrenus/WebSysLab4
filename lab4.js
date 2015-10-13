$('#site').on('click', function(){
	$.ajax({
		url:"lab4.json"
	}).done(function(data){
		$('body').empty();
		for(song in data.songs){
			var content = '<div class="song">';
			for(x in data.songs[song]){
				if(x == 'coverart' || x == 'album_art')
					content += '<section class=' + x + '"><img src="' + data.songs[song][x] + '"></section>';
				else if(x == 'site' || x == 'link')
					content += '<section class="'+ x + '"><a href="' + data.songs[song][x] + '">' + data.songs[song][x] + '</a></section>';
				else
					content += '<section class="' + x + '">' + data.songs[song][x] +"</section>";
			}
			content += "</div>"
			$('body').append(content);
		}
	});
});