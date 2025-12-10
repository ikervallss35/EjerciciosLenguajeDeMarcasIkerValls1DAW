<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <body>
            <xsl:for-each select="horario/dia">
                <p>
                Día <xsl:value-of select="numdia"/>
                </p>
                <xsl:for-each select="tarea">
                    <ul>
                        <li>  
                        <xsl:value-of select="asignatura"></xsl:value-of> = Prioridad: <xsl:value-of select="@prioridad"></xsl:value-of> 
                        <br/>
                        De <xsl:value-of select="hora-ini"></xsl:value-of> a <xsl:value-of select="hora-fin"></xsl:value-of>
                        </li>
                    </ul>   
                </xsl:for-each>
            </xsl:for-each>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>