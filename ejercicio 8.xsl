<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <p>Las lista de asignaturas ordenadas alfabéticamente es:</p>
        <ul>
          <xsl:for-each select="//tarea">
            <xsl:sort select="asignatura"/>
            <li><xsl:value-of select="asignatura"/></li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>