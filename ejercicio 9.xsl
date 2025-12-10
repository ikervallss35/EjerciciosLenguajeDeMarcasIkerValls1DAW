<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h2>horario</h2>
        <center>Mi horario<br/></center>
        <table border="1" align="center">
          <tr>
            <th>DIA</th>
          <th>ASIGNATURA</th>
          <th>Horario</th>
          <th>Prioridad</th>
          </tr>
            <tr>
            <xsl:for-each select="horario/dia/tarea">
          <xsl:sort select="../numdia"/>
            <tr>
              <td><xsl:value-of select="../numdia"/></td>
              <td><xsl:value-of select="asignatura"/></td>
              <td><xsl:value-of select="hora-ini"/> - <xsl:value-of
              select="hora-fin"/></td>
              <td><xsl:value-of select="@prioridad"/></td>
            </tr>
            </xsl:for-each>
            </tr>
      </table>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>