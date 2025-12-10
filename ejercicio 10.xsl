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
          <th>Turno</th>
          <th>Importancia</th>
          </tr>
          <xsl:for-each select="horario/dia">
            <xsl:sort select="numdia"/>
            <xsl:for-each select="tarea">
              <tr>
                <td>
                  <xsl:choose>
                    <xsl:when test="../numdia='1'">Lunes</xsl:when>
                    <xsl:when test="../numdia='2'">Martes</xsl:when>
                    <xsl:when test="../numdia='3'">Miércoles</xsl:when>
                    <xsl:when test="../numdia='4'">Jueves</xsl:when>
                    <xsl:when test="../numdia='5'">Viernes</xsl:when>
                  </xsl:choose>
                </td>
                <td>
                  <xsl:value-of select="asignatura"/></td>
                <td>
                  <xsl:choose>
                    <xsl:when test="hora-ini &lt; '16'">Mañanas</xsl:when>
                    <xsl:otherwise>Tardes</xsl:otherwise>
                  </xsl:choose>
                </td>
                <td>
                  <xsl:choose>
                    <xsl:when test="@prioridad='alta'">Muy importante</xsl:when>
                    <xsl:when test="@prioridad='media'">Normal</xsl:when>
                    <xsl:when test="@prioridad='baja'">Poco Importante</xsl:when>
                  </xsl:choose>
                </td>
              </tr>
            </xsl:for-each>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>