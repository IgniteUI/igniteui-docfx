(function () {
	var buttonClass = "stackblitz-btn";
    var buttonIframeIdAttrName = "data-iframe-id";
    var buttonDemosUrlAttrName = "data-demos-base-url";	
    var stackBlitzApiUrl = "https://run.stackblitz.com/api/angular/v1";
    var sharedFileName = "shared.json";
    var assetsFolder = "/assets/";
    var demoFilesFolderUrlPath =  assetsFolder + "samples/";
    var assetsRegex = new RegExp("\/?assets\/", "g");

    var isButtonClickInProgress = false;

    var demosBaseUrl;
    var sharedFileContent;

	var init = function () {        
        var stackblitzButtons = $("." + buttonClass);
        if (stackblitzButtons.length > 0) {
            demosBaseUrl = $(stackblitzButtons[0]).attr(buttonDemosUrlAttrName);            
            $("." + buttonClass).on("click", onStackblitzButtonClicked);

            getDemosSharedFile();
        }
    }

    var getDemosSharedFile = function () {        
        var sharedFileUrl = demosBaseUrl + demoFilesFolderUrlPath + sharedFileName;
        $.get(sharedFileUrl).done(function (data, requestType, httpResponse) {
            replaceRelativeAssetsUrls(data.files);
            sharedFileContent = data;
        });
    }

    var onStackblitzButtonClicked = function (event) {
		if (isButtonClickInProgress) {
			return;
		}

        isButtonClickInProgress = true;
        var $button = $(this);
        var iframeSrc = $("#" + $button.attr(buttonIframeIdAttrName)).attr("src");
        var demoPath = iframeSrc.replace(demosBaseUrl, "");
        var demoFileUrl = demosBaseUrl +
            demoFilesFolderUrlPath.substring(0, demoFilesFolderUrlPath.length - 1) +
            demoPath + ".json";

        $.get(demoFileUrl).done(onDemoFileReceieved);
    }

    var replaceRelativeAssetsUrls = function (files) {
        var assetsUrl = demosBaseUrl + assetsFolder;
        for (var i = 0; i < files.length; i++) {
            if (files[i].hasRelativeAssetsUrls) {
                files[i].content = files[i].content.replace(assetsRegex, "https://www.infragistics.com/angular-demos/assets/");
            }
        }
    }

    var onDemoFileReceieved = function (data, requestType, httpResponse) {
        replaceRelativeAssetsUrls(data);
        var formData = {
            dependencies: sharedFileContent.dependencies,
            files: sharedFileContent.files.concat(data)
        }

        var form = createStackblitzForm(formData);
        form.appendTo($("body"));
        form.submit();
        isButtonClickInProgress = false;
    }

    /*  a sample forms object -
        {
            description: `MIT licensed sample`,
            files: [{
                path: `src/index.html`,
                content: `<h1>Hello world!</h1>`
            }],
            dependencies: `"@angular/animations": "^5.2.0",
                "@angular/common": "^5.2.0"`,
            tags: ["tagA", "tagB", "tagC"]
        }
    */
    var createStackblitzForm = function (data) {
        var form = $("<form />", {
                method: "POST",
                action: stackBlitzApiUrl,
                target: "_blank",
                style: "display: none;"
        });
        
        // files
        for (var i = 0; i < data.files.length; i++) {
            var fileInput = $("<input />", {
                type: "hidden",
                name: "files[" + data.files[i].path + "]",
                value: data.files[i].content
            });

            fileInput.appendTo(form);
        }

        // tags
        if (data.tags) {
            for (var i = 0; i < data.tags.length; i++) {
                var tagInput = $("<input />", {
                    type: "hidden",
                    name: "tags[" + i + "]",
                    value: data.tags[i]
                });

                tagInput.appendTo(tagInput);
            }
        }

        // description
        if (data.description) {
            var descriptionInput = $("<input />", {
                type: "hidden",
                name: "description",
                value: data.description
            });

            descriptionInput.appendTo(form);
        }

        // dependencies
        var dependenciesInput = $("<input />", {
            type: "hidden",
            name: "dependencies",
            value: data.dependencies
        });

        dependenciesInput.appendTo(form);
        return form;
    }

    $(document).ready(function() {
        init();
    });    
}());