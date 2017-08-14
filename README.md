# vue2-dzone 
Base on **Vue2**, wrapper for **Dropzone.js**.    
- [Vue js](https://vuejs.org/)  
- [Dropzone js](http://www.dropzonejs.com/)  


# Render a Upload-Area Easily  
- Default Theme
```html
<vue-dzone :id="'mydzone'" :url="'/photo/upload'" :defaultTheme="true">
    <div class="dz-message" slot="form"><span>Hey drop here</span></div>
</vue-dzone>
```   

![](https://raw.githubusercontent.com/hchstera/vue2-dzone/master/pics/default_theme.png)  

# Features  
- Default theme
- Vue-Slot driven form template
- Vue-Slot driven preview template
- pass option to dropzone from single prop
- pass option to dropzone from entire object
- Catch native dropzone instance


# Document and Demo
comming soon...

# NPM Package  
[NPM Package](https://www.npmjs.com/package/vue2-dzone)

# Install

	npm install vue2-dzone   
	
or  

	yarn add vue2-dzone  


# Notice
- vue2-dzone base on Vue.js
- vue2-dzone base on Dropzone.js
- By default, the DOM container with css (.dz-message) will be replace by preview template 

# How to use 
Comming soon...

# Props - Required
| Prop Name | Type | Description |
|----------|------|--------------|
| id | String | The dropzone form's id.|
| url | String | Upload url. (post by default)|

# Props - Dropzone.js
Same as dropzone.js
See - [Dropzone configuration](http://www.dropzonejs.com/#configuration-options) 

# Props - Custom
| Prop Name | Type | Default | Description |
|----------|------|------|--------|
| dropzoneClass | String | empty string |The dropzone form's class. **do not use :class** to bind class, it will effect entire component not Dropzone's form|
| dropzoneStyle | String | empty string |The dropzone form's style.|
| defaultTheme | Boolean | false |if true, it will generate a dropzone like official style|
| options | Object | empty object |if provide a object, it will be merge by dropzone's default options|

