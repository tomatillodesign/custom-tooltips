// CLB Custom Tooltips

function applyToolTips() {

     console.log('CLB Tooltips 5-13 350p');
     console.log(tooltip_object);

     //let tooltipsObj = [ tooltip_object.tooltips ];
     let tooltipsObj = Array.from(tooltip_object.tooltips);
     //console.log(tooltipsObj);
     // console.log(tooltipsObj.length);

     // console.log(tooltipsObjTEST);

     //console.log('CLB Custom Tooltips Active 10:14');
     let content = document.getElementById('genesis-content');
     let paragraphs = content.getElementsByTagName("p");

     for (var i = 0; i < paragraphs.length; i++) {

          // console.log('paragraphs');
          // console.log(paragraphs[i]);

          // New variable with paragraph term
          let para = paragraphs[i].innerHTML;

          for (var j = 0; j < tooltipsObj.length; j++) {

               let  currentTooltip = tooltipsObj[j];
               let  currentterm = currentTooltip.term;
               //console.log(currentterm);
               // console.log('Current Term Parent: ' + currentterm.parentNode);
               let  currentTip = currentTooltip.definition;

               // var regex = new RegExp('\\b' + currentterm + '\\b');
               //
               // if( para.includes(currentterm) ) {
               //      console.log( 'CONTAINS TERM = TRUE');
               //      console.log('Current Term Parent: ' + currentterm.parentElement);
               // };
               //
               // //para = para.replace(currentterm, '<span class="clb-custom-definition" title="' + currentTip + '">' + currentterm + '</span>');
               // para = para.replace(regex, '<span class="clb-custom-definition" title="' + currentTip + '">' + currentterm + '</span>');

               // REGEX Source: https://stackoverflow.com/a/16604883/5369381
               text = para;
               found = currentterm;
               //re = new RegExp(found + '(?=[^<>]*(<|$))', 'g');
               re = new RegExp('\\b' + found + '\\b(?=[^<>]*(<|$))', 'g'); // get the whole word only
               para = para.replace(re, '<span class="clb-custom-definition" title="' + currentTip + '">'+currentterm+'</span>');

          }

          paragraphs[i].innerHTML = para;

     }


     let plantInfoItems = content.getElementsByClassName('plant-info-item');

     // for (var paragraph in paragraphs) {
     //      console.log(paragraph.innerHTML);
     // }

     for (var i = 0; i < plantInfoItems.length; i++) {

          //console.log('plant-info-item');

          // New variable with paragraph term
          let para = plantInfoItems[i].innerHTML;

          for (var j = 0; j < tooltipsObj.length; j++) {

               let  currentTooltip = tooltipsObj[j];
               let  currentterm = currentTooltip.term;
               let  currentTip = currentTooltip.definition;

               var regex = new RegExp('\\b' + currentterm + '\\b', 'gi');
               let foundTerm = para.match(regex);
               //console.log('foundTerm: ' + foundTerm);

               //para = para.replace(currentterm, '<span class="clb-custom-definition" title="' + currentTip + '">' + currentterm + '</span>');
               //para = para.replace(regex, '<span class="clb-custom-definition" title="' + currentTip + '">' + currentterm + '</span>');

               //para = para.replace(currentterm, '<span class="clb-custom-definition" title="' + currentTip + '">' + currentterm + '</span>');


               // REGEX Source: https://stackoverflow.com/a/16604883/5369381
               text = para;
               found = currentterm;
               //re = new RegExp(found + '(?=[^<>]*(<|$))', 'g');
               re = new RegExp('\\b' + found + '\\b(?=[^<>]*(<|$))', 'g'); // whole word only
               para = para.replace(re, '<span class="clb-custom-definition" title="' + currentTip + '">'+currentterm+'</span>');


          }

          plantInfoItems[i].innerHTML = para;

     }



}

applyToolTips();
