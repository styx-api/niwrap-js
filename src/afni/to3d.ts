// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TO3D_METADATA: Metadata = {
    id: "aa25be4c65cd1700bec18ae9e25e237d195d1256.boutiques",
    name: "to3d",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface To3dParameters {
    "__STYXTYPE__": "to3d";
    "input_files": Array<InputPathType>;
    "type"?: "spgr" | "fse" | "epan" | "anat" | "ct" | "spct" | "pet" | "mra" | "bmap" | "diff" | "omri" | "abuc" | "fim" | "fith" | "fico" | "fitt" | "fift" | "fizt" | "fict" | "fibt" | "fibn" | "figt" | "fipt" | "fbuc" | null | undefined;
    "statpar"?: Array<number> | null | undefined;
    "prefix"?: string | null | undefined;
    "session"?: string | null | undefined;
    "geomparent"?: InputPathType | null | undefined;
    "anatparent"?: InputPathType | null | undefined;
    "nosave_flag": boolean;
    "nowritebrik_flag": boolean;
    "view"?: "orig" | "acpc" | "tlrc" | null | undefined;
    "time_zt"?: Array<string> | null | undefined;
    "time_tz"?: Array<string> | null | undefined;
    "tr_units"?: "ms" | "msec" | "s" | "sec" | "Hz" | "Hertz" | null | undefined;
    "torg"?: number | null | undefined;
    "xFOV"?: string | null | undefined;
    "yFOV"?: string | null | undefined;
    "zFOV"?: string | null | undefined;
    "xSLAB"?: string | null | undefined;
    "ySLAB"?: string | null | undefined;
    "zSLAB"?: string | null | undefined;
    "zorigin"?: number | null | undefined;
    "data_type"?: "short" | "float" | "byte" | "complex" | null | undefined;
    "global_scaling_factor"?: number | null | undefined;
    "nofloatscan_flag": boolean;
    "in1_flag": boolean;
    "orient"?: string | null | undefined;
    "skip_outliers_flag": boolean;
    "text_outliers_flag": boolean;
    "save_outliers"?: string | null | undefined;
    "assume_dicom_mosaic_flag": boolean;
    "oblique_origin_flag": boolean;
    "reverse_list_flag": boolean;
    "use_last_elem_flag": boolean;
    "use_old_mosaic_code_flag": boolean;
    "ushort2float_flag": boolean;
    "verbose_flag": boolean;
    "gamma"?: number | null | undefined;
    "ncolors"?: number | null | undefined;
    "xtwarns_flag": boolean;
    "quit_on_err_flag": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "to3d": to3d_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "to3d": to3d_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `to3d(...)`.
 *
 * @interface
 */
interface To3dOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output AFNI HEAD file
     */
    headfile: OutputPathType | null;
    /**
     * Output AFNI BRIK file
     */
    brikfile: OutputPathType | null;
    /**
     * Outlier count file
     */
    outfile_outliers: OutputPathType | null;
}


function to3d_params(
    input_files: Array<InputPathType>,
    type_: "spgr" | "fse" | "epan" | "anat" | "ct" | "spct" | "pet" | "mra" | "bmap" | "diff" | "omri" | "abuc" | "fim" | "fith" | "fico" | "fitt" | "fift" | "fizt" | "fict" | "fibt" | "fibn" | "figt" | "fipt" | "fbuc" | null = null,
    statpar: Array<number> | null = null,
    prefix: string | null = null,
    session: string | null = null,
    geomparent: InputPathType | null = null,
    anatparent: InputPathType | null = null,
    nosave_flag: boolean = false,
    nowritebrik_flag: boolean = false,
    view: "orig" | "acpc" | "tlrc" | null = null,
    time_zt: Array<string> | null = null,
    time_tz: Array<string> | null = null,
    tr_units: "ms" | "msec" | "s" | "sec" | "Hz" | "Hertz" | null = null,
    torg: number | null = null,
    x_fov: string | null = null,
    y_fov: string | null = null,
    z_fov: string | null = null,
    x_slab: string | null = null,
    y_slab: string | null = null,
    z_slab: string | null = null,
    zorigin: number | null = null,
    data_type: "short" | "float" | "byte" | "complex" | null = null,
    global_scaling_factor: number | null = null,
    nofloatscan_flag: boolean = false,
    in1_flag: boolean = false,
    orient: string | null = null,
    skip_outliers_flag: boolean = false,
    text_outliers_flag: boolean = false,
    save_outliers: string | null = null,
    assume_dicom_mosaic_flag: boolean = false,
    oblique_origin_flag: boolean = false,
    reverse_list_flag: boolean = false,
    use_last_elem_flag: boolean = false,
    use_old_mosaic_code_flag: boolean = false,
    ushort2float_flag: boolean = false,
    verbose_flag: boolean = false,
    gamma: number | null = null,
    ncolors: number | null = null,
    xtwarns_flag: boolean = false,
    quit_on_err_flag: boolean = false,
): To3dParameters {
    /**
     * Build parameters.
    
     * @param input_files Input 2D image files
     * @param type_ Declare images to contain data of a given type
     * @param statpar Supply auxiliary statistical parameters
     * @param prefix Prefix of the output 3D dataset
     * @param session Session directory for output 3D dataset
     * @param geomparent Read geometry data from dataset file
     * @param anatparent Take anatomy parent from dataset file
     * @param nosave_flag Suppress autosave of 3D dataset
     * @param nowritebrik_flag Suppress saving of the BRIK file
     * @param view Set the dataset's viewing coordinates
     * @param time_zt Specify time dependent dataset (z-axis first, then t-axis)
     * @param time_tz Specify time dependent dataset (t-axis first, then z-axis)
     * @param tr_units Specify TR units
     * @param torg Set time origin of dataset
     * @param x_fov Specify size and orientation of the x-axis extent
     * @param y_fov Specify size and orientation of the y-axis extent
     * @param z_fov Specify size and orientation of the z-axis extent
     * @param x_slab Specify x-axis slab
     * @param y_slab Specify y-axis slab
     * @param z_slab Specify z-axis slab
     * @param zorigin Set the center of the first slice offset in z-axis
     * @param data_type Set voxel data to be stored as given data type
     * @param global_scaling_factor Global scaling factor
     * @param nofloatscan_flag Do not scan for illegal floating point values
     * @param in1_flag Read and process images one slice at a time
     * @param orient Set the orientation of the 3D volumes
     * @param skip_outliers_flag Skip the outlier check for 3D+time datasets
     * @param text_outliers_flag Only print out the outlier check results in text form
     * @param save_outliers Save the outliers count into a 1D file
     * @param assume_dicom_mosaic_flag Assume any Siemens DICOM file is a potential MOSAIC image
     * @param oblique_origin_flag Assume origin and orientation from oblique transformation matrix
     * @param reverse_list_flag Reverse the input file list
     * @param use_last_elem_flag Search DICOM images for the last occurrence of each element
     * @param use_old_mosaic_code_flag Do not use the Dec 2010 updates to Siemens mosaic code
     * @param ushort2float_flag Convert input shorts to float and add 2^16 to any negatives
     * @param verbose_flag Show debugging information for reading DICOM files
     * @param gamma Gamma correction factor for the monitor
     * @param ncolors Number of gray levels for the image displays
     * @param xtwarns_flag Turn on display of Xt warning messages
     * @param quit_on_err_flag Do not launch interactive to3d mode if input has error
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "to3d" as const,
        "input_files": input_files,
        "nosave_flag": nosave_flag,
        "nowritebrik_flag": nowritebrik_flag,
        "nofloatscan_flag": nofloatscan_flag,
        "in1_flag": in1_flag,
        "skip_outliers_flag": skip_outliers_flag,
        "text_outliers_flag": text_outliers_flag,
        "assume_dicom_mosaic_flag": assume_dicom_mosaic_flag,
        "oblique_origin_flag": oblique_origin_flag,
        "reverse_list_flag": reverse_list_flag,
        "use_last_elem_flag": use_last_elem_flag,
        "use_old_mosaic_code_flag": use_old_mosaic_code_flag,
        "ushort2float_flag": ushort2float_flag,
        "verbose_flag": verbose_flag,
        "xtwarns_flag": xtwarns_flag,
        "quit_on_err_flag": quit_on_err_flag,
    };
    if (type_ !== null) {
        params["type"] = type_;
    }
    if (statpar !== null) {
        params["statpar"] = statpar;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (session !== null) {
        params["session"] = session;
    }
    if (geomparent !== null) {
        params["geomparent"] = geomparent;
    }
    if (anatparent !== null) {
        params["anatparent"] = anatparent;
    }
    if (view !== null) {
        params["view"] = view;
    }
    if (time_zt !== null) {
        params["time_zt"] = time_zt;
    }
    if (time_tz !== null) {
        params["time_tz"] = time_tz;
    }
    if (tr_units !== null) {
        params["tr_units"] = tr_units;
    }
    if (torg !== null) {
        params["torg"] = torg;
    }
    if (x_fov !== null) {
        params["xFOV"] = x_fov;
    }
    if (y_fov !== null) {
        params["yFOV"] = y_fov;
    }
    if (z_fov !== null) {
        params["zFOV"] = z_fov;
    }
    if (x_slab !== null) {
        params["xSLAB"] = x_slab;
    }
    if (y_slab !== null) {
        params["ySLAB"] = y_slab;
    }
    if (z_slab !== null) {
        params["zSLAB"] = z_slab;
    }
    if (zorigin !== null) {
        params["zorigin"] = zorigin;
    }
    if (data_type !== null) {
        params["data_type"] = data_type;
    }
    if (global_scaling_factor !== null) {
        params["global_scaling_factor"] = global_scaling_factor;
    }
    if (orient !== null) {
        params["orient"] = orient;
    }
    if (save_outliers !== null) {
        params["save_outliers"] = save_outliers;
    }
    if (gamma !== null) {
        params["gamma"] = gamma;
    }
    if (ncolors !== null) {
        params["ncolors"] = ncolors;
    }
    return params;
}


function to3d_cargs(
    params: To3dParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("to3d");
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    if ((params["type"] ?? null) !== null) {
        cargs.push(
            "-type",
            (params["type"] ?? null)
        );
    }
    if ((params["statpar"] ?? null) !== null) {
        cargs.push(
            "-statpar",
            ...(params["statpar"] ?? null).map(String)
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["session"] ?? null) !== null) {
        cargs.push(
            "-session",
            (params["session"] ?? null)
        );
    }
    if ((params["geomparent"] ?? null) !== null) {
        cargs.push(
            "-geomparent",
            execution.inputFile((params["geomparent"] ?? null))
        );
    }
    if ((params["anatparent"] ?? null) !== null) {
        cargs.push(
            "-anatparent",
            execution.inputFile((params["anatparent"] ?? null))
        );
    }
    if ((params["nosave_flag"] ?? null)) {
        cargs.push("-nosave");
    }
    if ((params["nowritebrik_flag"] ?? null)) {
        cargs.push("-nowritebrik");
    }
    if ((params["view"] ?? null) !== null) {
        cargs.push(
            "-view",
            (params["view"] ?? null)
        );
    }
    if ((params["time_zt"] ?? null) !== null) {
        cargs.push(
            "-time:zt",
            ...(params["time_zt"] ?? null)
        );
    }
    if ((params["time_tz"] ?? null) !== null) {
        cargs.push(
            "-time:tz",
            ...(params["time_tz"] ?? null)
        );
    }
    if ((params["tr_units"] ?? null) !== null) {
        cargs.push(
            "-t",
            (params["tr_units"] ?? null)
        );
    }
    if ((params["torg"] ?? null) !== null) {
        cargs.push(
            "-Torg",
            String((params["torg"] ?? null))
        );
    }
    if ((params["xFOV"] ?? null) !== null) {
        cargs.push(
            "-xFOV",
            (params["xFOV"] ?? null)
        );
    }
    if ((params["yFOV"] ?? null) !== null) {
        cargs.push(
            "-yFOV",
            (params["yFOV"] ?? null)
        );
    }
    if ((params["zFOV"] ?? null) !== null) {
        cargs.push(
            "-zFOV",
            (params["zFOV"] ?? null)
        );
    }
    if ((params["xSLAB"] ?? null) !== null) {
        cargs.push(
            "-xSLAB",
            (params["xSLAB"] ?? null)
        );
    }
    if ((params["ySLAB"] ?? null) !== null) {
        cargs.push(
            "-ySLAB",
            (params["ySLAB"] ?? null)
        );
    }
    if ((params["zSLAB"] ?? null) !== null) {
        cargs.push(
            "-zSLAB",
            (params["zSLAB"] ?? null)
        );
    }
    if ((params["zorigin"] ?? null) !== null) {
        cargs.push(
            "-zorigin",
            String((params["zorigin"] ?? null))
        );
    }
    if ((params["data_type"] ?? null) !== null) {
        cargs.push(
            "-datum",
            (params["data_type"] ?? null)
        );
    }
    if ((params["global_scaling_factor"] ?? null) !== null) {
        cargs.push(
            "-gsfac",
            String((params["global_scaling_factor"] ?? null))
        );
    }
    if ((params["nofloatscan_flag"] ?? null)) {
        cargs.push("-nofloatscan");
    }
    if ((params["in1_flag"] ?? null)) {
        cargs.push("-in:1");
    }
    if ((params["orient"] ?? null) !== null) {
        cargs.push(
            "-orient",
            (params["orient"] ?? null)
        );
    }
    if ((params["skip_outliers_flag"] ?? null)) {
        cargs.push("-skip_outliers");
    }
    if ((params["text_outliers_flag"] ?? null)) {
        cargs.push("-text_outliers");
    }
    if ((params["save_outliers"] ?? null) !== null) {
        cargs.push(
            "-save_outliers",
            (params["save_outliers"] ?? null)
        );
    }
    if ((params["assume_dicom_mosaic_flag"] ?? null)) {
        cargs.push("-assume_dicom_mosaic");
    }
    if ((params["oblique_origin_flag"] ?? null)) {
        cargs.push("-oblique_origin");
    }
    if ((params["reverse_list_flag"] ?? null)) {
        cargs.push("-reverse_list");
    }
    if ((params["use_last_elem_flag"] ?? null)) {
        cargs.push("-use_last_elem");
    }
    if ((params["use_old_mosaic_code_flag"] ?? null)) {
        cargs.push("-use_old_mosaic_code");
    }
    if ((params["ushort2float_flag"] ?? null)) {
        cargs.push("-ushort2float");
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-verb");
    }
    if ((params["gamma"] ?? null) !== null) {
        cargs.push(
            "-gamma",
            String((params["gamma"] ?? null))
        );
    }
    if ((params["ncolors"] ?? null) !== null) {
        cargs.push(
            "-ncolors",
            String((params["ncolors"] ?? null))
        );
    }
    if ((params["xtwarns_flag"] ?? null)) {
        cargs.push("-xtwarns");
    }
    if ((params["quit_on_err_flag"] ?? null)) {
        cargs.push("-quit_on_err");
    }
    return cargs;
}


function to3d_outputs(
    params: To3dParameters,
    execution: Execution,
): To3dOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: To3dOutputs = {
        root: execution.outputFile("."),
        headfile: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".HEAD"].join('')) : null,
        brikfile: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".BRIK"].join('')) : null,
        outfile_outliers: ((params["save_outliers"] ?? null) !== null) ? execution.outputFile([(params["save_outliers"] ?? null)].join('')) : null,
    };
    return ret;
}


function to3d_execute(
    params: To3dParameters,
    execution: Execution,
): To3dOutputs {
    /**
     * Creates 3D datasets for use with AFNI from 2D image files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `To3dOutputs`).
     */
    params = execution.params(params)
    const cargs = to3d_cargs(params, execution)
    const ret = to3d_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function to3d(
    input_files: Array<InputPathType>,
    type_: "spgr" | "fse" | "epan" | "anat" | "ct" | "spct" | "pet" | "mra" | "bmap" | "diff" | "omri" | "abuc" | "fim" | "fith" | "fico" | "fitt" | "fift" | "fizt" | "fict" | "fibt" | "fibn" | "figt" | "fipt" | "fbuc" | null = null,
    statpar: Array<number> | null = null,
    prefix: string | null = null,
    session: string | null = null,
    geomparent: InputPathType | null = null,
    anatparent: InputPathType | null = null,
    nosave_flag: boolean = false,
    nowritebrik_flag: boolean = false,
    view: "orig" | "acpc" | "tlrc" | null = null,
    time_zt: Array<string> | null = null,
    time_tz: Array<string> | null = null,
    tr_units: "ms" | "msec" | "s" | "sec" | "Hz" | "Hertz" | null = null,
    torg: number | null = null,
    x_fov: string | null = null,
    y_fov: string | null = null,
    z_fov: string | null = null,
    x_slab: string | null = null,
    y_slab: string | null = null,
    z_slab: string | null = null,
    zorigin: number | null = null,
    data_type: "short" | "float" | "byte" | "complex" | null = null,
    global_scaling_factor: number | null = null,
    nofloatscan_flag: boolean = false,
    in1_flag: boolean = false,
    orient: string | null = null,
    skip_outliers_flag: boolean = false,
    text_outliers_flag: boolean = false,
    save_outliers: string | null = null,
    assume_dicom_mosaic_flag: boolean = false,
    oblique_origin_flag: boolean = false,
    reverse_list_flag: boolean = false,
    use_last_elem_flag: boolean = false,
    use_old_mosaic_code_flag: boolean = false,
    ushort2float_flag: boolean = false,
    verbose_flag: boolean = false,
    gamma: number | null = null,
    ncolors: number | null = null,
    xtwarns_flag: boolean = false,
    quit_on_err_flag: boolean = false,
    runner: Runner | null = null,
): To3dOutputs {
    /**
     * Creates 3D datasets for use with AFNI from 2D image files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_files Input 2D image files
     * @param type_ Declare images to contain data of a given type
     * @param statpar Supply auxiliary statistical parameters
     * @param prefix Prefix of the output 3D dataset
     * @param session Session directory for output 3D dataset
     * @param geomparent Read geometry data from dataset file
     * @param anatparent Take anatomy parent from dataset file
     * @param nosave_flag Suppress autosave of 3D dataset
     * @param nowritebrik_flag Suppress saving of the BRIK file
     * @param view Set the dataset's viewing coordinates
     * @param time_zt Specify time dependent dataset (z-axis first, then t-axis)
     * @param time_tz Specify time dependent dataset (t-axis first, then z-axis)
     * @param tr_units Specify TR units
     * @param torg Set time origin of dataset
     * @param x_fov Specify size and orientation of the x-axis extent
     * @param y_fov Specify size and orientation of the y-axis extent
     * @param z_fov Specify size and orientation of the z-axis extent
     * @param x_slab Specify x-axis slab
     * @param y_slab Specify y-axis slab
     * @param z_slab Specify z-axis slab
     * @param zorigin Set the center of the first slice offset in z-axis
     * @param data_type Set voxel data to be stored as given data type
     * @param global_scaling_factor Global scaling factor
     * @param nofloatscan_flag Do not scan for illegal floating point values
     * @param in1_flag Read and process images one slice at a time
     * @param orient Set the orientation of the 3D volumes
     * @param skip_outliers_flag Skip the outlier check for 3D+time datasets
     * @param text_outliers_flag Only print out the outlier check results in text form
     * @param save_outliers Save the outliers count into a 1D file
     * @param assume_dicom_mosaic_flag Assume any Siemens DICOM file is a potential MOSAIC image
     * @param oblique_origin_flag Assume origin and orientation from oblique transformation matrix
     * @param reverse_list_flag Reverse the input file list
     * @param use_last_elem_flag Search DICOM images for the last occurrence of each element
     * @param use_old_mosaic_code_flag Do not use the Dec 2010 updates to Siemens mosaic code
     * @param ushort2float_flag Convert input shorts to float and add 2^16 to any negatives
     * @param verbose_flag Show debugging information for reading DICOM files
     * @param gamma Gamma correction factor for the monitor
     * @param ncolors Number of gray levels for the image displays
     * @param xtwarns_flag Turn on display of Xt warning messages
     * @param quit_on_err_flag Do not launch interactive to3d mode if input has error
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `To3dOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TO3D_METADATA);
    const params = to3d_params(input_files, type_, statpar, prefix, session, geomparent, anatparent, nosave_flag, nowritebrik_flag, view, time_zt, time_tz, tr_units, torg, x_fov, y_fov, z_fov, x_slab, y_slab, z_slab, zorigin, data_type, global_scaling_factor, nofloatscan_flag, in1_flag, orient, skip_outliers_flag, text_outliers_flag, save_outliers, assume_dicom_mosaic_flag, oblique_origin_flag, reverse_list_flag, use_last_elem_flag, use_old_mosaic_code_flag, ushort2float_flag, verbose_flag, gamma, ncolors, xtwarns_flag, quit_on_err_flag)
    return to3d_execute(params, execution);
}


export {
      TO3D_METADATA,
      To3dOutputs,
      To3dParameters,
      to3d,
      to3d_params,
};
