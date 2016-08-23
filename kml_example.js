		



Map.setCenter(-75.209083, 40.691226, 16);

//DOWNTOWN EASTON decial coordinates ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^




-----------------------------------------------------


KML code example

		<?xml version="1.0" encoding="UTF-8"?>
		<kml xmlns="http://www.opengis.net/kml/2.2">
		<Document>
		<Placemark>
		  <name>New York City</name>
		  <description>New York City</description>
		  <Point>
		    <coordinates>-74.006393,40.714172,0</coordinates>
		  </Point>
		</Placemark>
		</Document>
		</kml>

---------------------------

Basically: 

Map.addLayer(SOMETHING);      


/
-----------------------------------------------------

Clean example of JS code in GE

	var landsat8 = ee.ImageCollection('LANDSAT/LC8_L1T');
	var secondHalf2013 = landsat8.filterDate('2013-06-01', '2013-12-31');
	var median = secondHalf2013.median();

	Map.addLayer(median, {'bands': ['B4', 'B3', 'B2'], 'min': 5000, 'max': 18000});
	Map.setCenter(-119.84, 37.83, 8);
      

-----------------------------------------------------
  

var collection = ee.ImageCollection('LANDSAT/LT5_L1T_32DAY_NDVI');
var filtered2000 = collection.filterDate('2000-01-01', '2000-12-31');
var ndvi = filtered2000.median();

Map.setCenter(-122.44, 37.74, 13);
Map.addLayer(ndvi, {palette: '000000, 00FF00', min: 0, max: 0.7});
      
      
     ^^^"infrared" view^^^




     Geometry, shapes
     

var rectangle = ee.Geometry.Rectangle(-109.05, 37, -102.05, 41);
var feature = ee.Feature(rectangle);

Map.setCenter(-75.9, 40.0, 5);
Map.addLayer(feature);
      

      Square, dark

