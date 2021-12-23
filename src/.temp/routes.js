const c1 = () => import(/* webpackChunkName: "page--src--templates--class-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/templates/Class.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--ontology-page-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/templates/OntologyPage.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--start-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Start.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--webpage-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/templates/Webpage.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--resources-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Resources.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--ontology-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Ontology.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Index.vue")

export default [
  {
    path: "/ontology/1.0/properties/temporal_unit_type/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/sub_category/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/ref_building/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/related_sensor/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/relates_to_measurement/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/relates_to_property/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/represents/",
    component: c1
  },
  {
    name: "__ontology_1_0_types_xsd_decimal",
    path: "/ontology/1.0/types/xsd:decimal",
    component: c1,
    meta: {
      dataPath: "/ontology/1.0/types/_xsd_decimal.json",
      dynamic: true
    }
  },
  {
    path: "/ontology/1.0/properties/offers/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/name/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/name_of_temporal_position/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/numeric_value_of_temporal_duration/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/numeric_value_of_temporal_position/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/makes_measurement/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/max_active_power/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/max_reactive_power/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/measures_property/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/month_of_year/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/listening/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/live_in/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/located_at/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/located_in/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/location/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/logging_interval/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/logical_node/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/lower_limit/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/in_XSD_date-time-stamp/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/kp/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/in_XSD_g-Year/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/in_XSD_g-YearMonth/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/in_date-time_description/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_date-time_description/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/in_building/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/in_floor/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/in_room/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/in_time_zone/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_after/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_before/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_contains/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_disjoint/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_during/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_equals/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_finished_by/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_finishes/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_in/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_meets/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_overlapped_by/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_overlaps/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_started_by/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/interval_starts/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/ipAddress/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/is_about/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/is_accomplished_by/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/is_command_of/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/is_controlled_by_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/is_located_at/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/is_measured_by_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/is_measured_in/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/is_offered_by/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/is_used_for/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_XSD_duration/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_beginning/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_building/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_channel/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_description/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_duration/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_duration_description/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_email/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_end/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_floor/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_function/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_manufacturer/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_meter_reading/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_meter_reading_type/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_mobile_number/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_model/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_name/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_price/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_profile/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_room/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_sensing_range/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_sensor/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_sensor_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_sensor_type/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_sub_zone/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_temporal_duration/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_tenant/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_threshold_measurement/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_time/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_time_instant_inside/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_time_w3_standard/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_timestamp/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_typical_consumption/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_value/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/has_zone/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/higher_limit/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/hour/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/hours_duration/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/floors_above_ground/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/floors_below_ground/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/data_provider/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/day/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/day_of_week/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/day_of_year/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/days_duration/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/description/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/connected_actuator/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/connected_sensor/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/consists_of/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/containe_of/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/control_asset/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/controll_asset/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/controlled_asset/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/controlled_property/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/controls_property/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/created_at/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/current_level/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/before/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/accomplishes/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/accuracy/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/active_power/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/acts_upon/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/address/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/after/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/Temporal_position/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/Temporal_reference_system_used/",
    component: c1
  },
  {
    path: "/ontology/1.0/properties/Time_position/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/AC-DC/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/CT-VT/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/DC-DC/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Generalized_date-time_description/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/HV-DC/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Actuating_function/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Actuator/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Air_flow_sensor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Air_to_air_heat_recovery/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Angle/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Audio_visual_appliance/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Boiler/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Building/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Building_related/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Burner/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/CO2_level/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Channel/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Chiller/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Close_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Close_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Coal/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Coil/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Commodity/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Communication_appliance/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Compressor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Control_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Controller/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Convertor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Currency_unit/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Current/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Damper/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Date_time_description/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Date_time_interval/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Day_of_week/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Device/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Door_switch/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Duration_description/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Electricity/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Electricity_sensor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Electronic_flow_storage_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Electronic_time_control/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Energy_conversion_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Energy_meter/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Energy_unit/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Event_function/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Fan/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Filter/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Floor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Flow/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Flow_controller/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Flow_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Flow_meter/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Flow_moving_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Flow_storage_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Flow_terminal/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Flow_terminal_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Frequency/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Function/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Gas/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Generalized_duration_description/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Generator/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Get_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Get_current_meter_value_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Get_meter_data_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Get_meter_history_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Get_sensing_data_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Grid_related/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/HP/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Humidifier/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Humidity/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Interceptor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/January/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Lamp/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Level_control_function/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Light/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Light_switch/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Lighting_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Load/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Maqnitute/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Measurement/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Meter/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Metering_function/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Micro_renewable/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Month_of_year/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Motion/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Multi_level_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Notify_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Occupancy/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Off_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Off_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/On_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/On_off_function/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/On_off_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/On_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Open_close_function/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Open_close_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Open_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Open_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/PID/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/PMU/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/PV/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Pause_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Power/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Power_meter/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Power_unit/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Pressure/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Pressure_unit/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Price/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Profile/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Proper_interval/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Property/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Pump/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/RVK/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Rocf/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Room/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Sensing_function/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Sensor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Service/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Set_absolute_level_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Set_level_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Set_relative_level_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Smoke/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Smoke_sensor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Space_heater/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Start_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Start_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Start_stop_function/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Start_stop_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/State/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/State_of_charge/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Step_down_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Step_up_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Stop_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Stop_state/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Storage/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Switch/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Switch_on_service/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Switching_device/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Tank/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Tap_position/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Task/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Temperature/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Temperature_sensor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Temperature_unit/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Temporal unit/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Temporal_duration/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Temporal_entity/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Temporal_position/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Temporal_reference_system/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Tenant/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Time/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Time_duration/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Time_instant/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Time_interval/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Time_position/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Time_zone/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Timestamp/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Toggle_command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Transformer/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Tube_bundle/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Voltage/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Volume/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/WPP/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Washing_machine/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Water/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Water_flow_sensor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Year/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Zone/",
    component: c1
  },
  {
    path: "/ontology/1.0/",
    component: c2
  },
  {
    path: "/start/",
    component: c3
  },
  {
    path: "/resource/",
    component: c4
  },
  {
    path: "/resources/",
    component: c5
  },
  {
    path: "/ontology/",
    component: c6
  },
  {
    path: "/overview/",
    component: c4
  },
  {
    path: "/init/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
