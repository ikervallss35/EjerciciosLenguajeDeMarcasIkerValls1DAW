<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <p>Las asignaturas que terminan despues de 15 h. y su prioridad no es alta son:</p>
        <xsl:for-each select="//tarea[hora-fin &gt; 15 and @prioridad !='alta']">
          - <xsl:value-of select="asignatura"/><br/><br/>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>