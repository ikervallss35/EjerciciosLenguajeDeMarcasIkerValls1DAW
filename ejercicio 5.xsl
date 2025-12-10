<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <body>
     <xsl:for-each select="//tarea[asignatura='Inglés']">
        La asignatura <xsl:value-of select="asignatura"/>
        se da el dia <xsl:value-of select="../numdia"/>
        de <xsl:value-of select="hora-ini"/>
        a <xsl:value-of select="hora-fin"/> horas
    </xsl:for-each>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>