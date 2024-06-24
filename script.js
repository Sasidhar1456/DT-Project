document.getElementById('collapsibleHeading').addEventListener('click', function() {
    var content = document.getElementById('collapsibleContent');
    var col = document.getElementById('col');
    var col1 = document.getElementById('col1');
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      col1.classList.remove('hidden');
      col.classList.add('hidden');
      
    } else {
      content.classList.add('hidden');
      col1.classList.add('hidden');
      col.classList.remove('hidden');
    }
  });


  document.getElementById('collapsibleHeading1').addEventListener('click', function() {
    var content = document.getElementById('collapsibleContent1');
    var col = document.getElementById('col2');
    var col1 = document.getElementById('col21');
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      col1.classList.remove('hidden');
      col.classList.add('hidden');
      
    } else {
      content.classList.add('hidden');
      col1.classList.add('hidden');
      col.classList.remove('hidden');
    }
  });

  document.getElementById('collapsibleHeading2').addEventListener('click', function() {
    var content = document.getElementById('collapsibleContent2');
    var col = document.getElementById('col3');
    var col1 = document.getElementById('col31');
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      col1.classList.remove('hidden');
      col.classList.add('hidden');
      
    } else {
      content.classList.add('hidden');
      col1.classList.add('hidden');
      col.classList.remove('hidden');
    }
  });

  function side(){
    var small = document.getElementById('small');
    var large = document.getElementById('large');
    if(large.classList.contains('hidden')){
      large.classList.remove('hidden');
      small.classList.remove('flex');
      large.classList.add('fixed');
      
    }

    else{
      large.classList.add('hidden');
      
      large.classList.remove('fixed');
      small.classList.remove('hidden');
    }
  }