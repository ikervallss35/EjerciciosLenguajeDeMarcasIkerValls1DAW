<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <p>Las asignaturas que se inician siempre antes de las 13 h. son:</p>
        <xsl:for-each select="//tarea[hora-ini &lt; 13]">
          - <xsl:value-of select="asignatura"/><br/><br/>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>