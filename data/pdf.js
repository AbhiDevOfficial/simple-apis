const PDFDocument = require('pdfkit')

function imageToPDF(pages, size = false) {
   if (!pages) throw new Error("PAGES_ARG : Missing required 'pages' argument.")
	for (let index = 0; index < pages.length; index++) {
          if (!size) {
            size = PDFDocument.openImage(pages[index]);
            size = [size.width, size.height]
          }
          const doc = new PDFDocument({ margin: 0, size: size })
		doc.image(pages[index], 0, 0, { fit: size, align: 'center', valign: 'center' })
		if (pages.length != index + 1) doc.addPage()
	}

    doc.end()
    return doc
}

module.exports = imageToPDF;
