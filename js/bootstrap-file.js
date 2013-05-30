(function () {
	var $document = $(document);

	$.bootstrapFile = function () {
		$("input.file[type='file']").each(function (index) {
			$this = $(this);
			$this.addClass("supressedfile span" + $this.attr("data-span")).attr("data-file", index).on("change", function (e) {
				$this = $(e.target);
				var index = $this.attr("data-file");
				$("[data-file='" + index + "'][type='text']").val($this.val().replace(/^.*[\\\/]/, ''));
			});
			var fileinputs = $("<div>").addClass("fileinputs span" + $this.attr("data-span"));
			var fakeinput = $("<div>").addClass("input-append fakefile");
			var input = $("<input class='span" + ($this.attr("data-span") - 1).toString() + "' type='text' data-file='" + index + "'>");
			var button = $("<button class='btn'>Open</button>");
			fakeinput.append(input, button);
			$this.parent().append(fileinputs);
			$this.appendTo(fileinputs);
			fileinputs.append(fakeinput);
		});
	};

	$($.bootstrapFile);
})(jQuery);