module.exports = [
	{
		name : "Load cell HX711",
		blocks : [
			'hx711_begin',
			'hx711_is_ready',
			'hx711_read',
			{
                xml:
                `<block type="hx711_read_average">
                    <value name="avg_count">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                    </value>
                </block>`
            },{
                xml:
                `<block type="hx711_get_value">
                    <value name="avg_count">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                    </value>
                </block>`
            },{
                xml:
                `<block type="hx711_get_units">
                    <value name="avg_count">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                    </value>
                </block>`
            },
			'hx711_tare',
			'hx711_set_scale'
		]
	}
];