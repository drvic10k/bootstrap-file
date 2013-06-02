(function () {
    var $document = $(document);

    $.bootstrapFile = function () {
        $("input.file[type='file']").each(function (index) {
            $this = $(this);
            $this.addClass("supressedfile span" + $this.attr("data-span").toString()).attr("data-file", index).on("change", function (e) {
                $this = $(e.target);
                var index = $this.attr("data-file");
                $("[data-file='" + index + "'][type='text']").val($this.val().replace(/^.*[\\\/]/, ''));
            });
            var fileinputs = $("<div>").addClass("fileinputs span" + $this.attr("data-span"));
            var fakeinput = $("<div>").addClass("fakefile");

            var input = $("<input class='span" + ($this.attr("data-span") - 1).toString() + "' type='text' data-file='" + index + "'>");
            var buttonFile = $("<button class='btn'>"+($this.attr("title")||"Open")+"</button>");
            var buttonRemove = ($this.attr("data-remove") == "true") ? $("<button class='btn' style='z-index:-1'><i class='icon-remove'></i></button>") : null;
            var classes = ["input-append", "input-prepend"];
            var inputs = [buttonRemove, input, buttonFile];

            if ($this.attr("data-orientation") == "left") { $this.removeClass("pull-right").addClass("pull-left"); classes.reverse(); inputs.reverse(); }
            if (buttonRemove == null) { classes.splice(1, 1); }
            fakeinput.addClass(classes.join(" "));
            fakeinput.append(inputs);
            $this.parent().append(fileinputs);
            //$("<div>").addClass(classes[0]).append($("<input type='text' class='span" + ($this.attr("data-span") - 1).toString() + "'>"), $this).appendTo(fileinputs);
            $this.appendTo(fileinputs);
            fileinputs.append(fakeinput);
        });
    };

    $($.bootstrapFile);
})(jQuery);