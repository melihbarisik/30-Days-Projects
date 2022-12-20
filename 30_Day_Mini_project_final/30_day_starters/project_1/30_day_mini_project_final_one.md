Here is the biggest Js chanllange I have ever face to face while during this course. You can search about country. If the country's name, capital or languages include the input value you will see this country on the screen. What's more you can use name,capital or population button to sort this country in the both way. You can understand from arrow icons to which way you are sorting your countries. End of the challange? Of course no haha.
While clicking the chart emoji you can see population or languages process on the screen. Don't worry if you have lots of countries, the icon will help you navigate to the chart part. This chart part working same as day 25. If you have more than ten countries to display the chart will display first ten however if the result is less than then then you will be able to see you outputs on the cart.

-Code Sample-
Every part of this project was unique for me. There are some examples.
 
```
noRepeatArray = [...new Set(filteredArray.map(JSON.stringify))].map(JSON.parse);

```

 Because I had three different filter I push all the result in the one object array (filteredArray). FilteredArray has everything what I need but with repeating. So as I had learned and used before the solution is Set(). After finished filtering I cleaned the repeating objects with this code part.

```
 function sortByName() {
  nameToggle = !nameToggle;
  switchArrowForName(upArrowForName, downArrowForName, 'inline', 'none', nameToggle);
  noRepeatArray.sort(function (a, b) {
    if (nameToggle) {
    return a.name > b.name ? 1 : -1
   } else {
    return a.name > b.name ? -1 : 1
   }
  })
}
```

To sort and change the icon way I coded that part. More than classic JS filtering by the help of nameToggle I controlled my icon arrow direction (up or down)

This project inludes almost everying I have learned during the course.

