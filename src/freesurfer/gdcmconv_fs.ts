// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const GDCMCONV_FS_METADATA: Metadata = {
    id: "33b8dc164d4657e5b24c4c1c814e2af7b9be58de.boutiques",
    name: "gdcmconv.fs",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface GdcmconvFsParameters {
    "__STYXTYPE__": "gdcmconv.fs";
    "input_file": InputPathType;
    "output_file": string;
    "explicit_flag": boolean;
    "implicit_flag": boolean;
    "use_dict_flag": boolean;
    "with_private_dict_flag": boolean;
    "check_meta_flag": boolean;
    "root_uid"?: string | null | undefined;
    "remove_gl_flag": boolean;
    "remove_private_tags_flag": boolean;
    "remove_retired_flag": boolean;
    "apply_lut_flag": boolean;
    "photometric_interpretation"?: string | null | undefined;
    "raw_flag": boolean;
    "deflated_flag": boolean;
    "jpeg_flag": boolean;
    "j2k_flag": boolean;
    "jpegls_flag": boolean;
    "rle_flag": boolean;
    "force_flag": boolean;
    "generate_icon_flag": boolean;
    "icon_minmax"?: Array<number> | null | undefined;
    "icon_auto_minmax_flag": boolean;
    "compress_icon_flag": boolean;
    "planar_configuration"?: string | null | undefined;
    "lossy_flag": boolean;
    "split"?: number | null | undefined;
    "verbose_flag": boolean;
    "warning_flag": boolean;
    "debug_flag": boolean;
    "error_flag": boolean;
    "quiet_flag": boolean;
    "jpeg_quality"?: number | null | undefined;
    "lossy_error"?: number | null | undefined;
    "rate"?: number | null | undefined;
    "j2k_quality"?: number | null | undefined;
    "tile"?: Array<number> | null | undefined;
    "number_resolution"?: number | null | undefined;
    "irreversible_flag": boolean;
    "ignore_errors_flag": boolean;
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
        "gdcmconv.fs": gdcmconv_fs_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `gdcmconv_fs(...)`.
 *
 * @interface
 */
interface GdcmconvFsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function gdcmconv_fs_params(
    input_file: InputPathType,
    output_file: string,
    explicit_flag: boolean = false,
    implicit_flag: boolean = false,
    use_dict_flag: boolean = false,
    with_private_dict_flag: boolean = false,
    check_meta_flag: boolean = false,
    root_uid: string | null = null,
    remove_gl_flag: boolean = false,
    remove_private_tags_flag: boolean = false,
    remove_retired_flag: boolean = false,
    apply_lut_flag: boolean = false,
    photometric_interpretation: string | null = null,
    raw_flag: boolean = false,
    deflated_flag: boolean = false,
    jpeg_flag: boolean = false,
    j2k_flag: boolean = false,
    jpegls_flag: boolean = false,
    rle_flag: boolean = false,
    force_flag: boolean = false,
    generate_icon_flag: boolean = false,
    icon_minmax: Array<number> | null = null,
    icon_auto_minmax_flag: boolean = false,
    compress_icon_flag: boolean = false,
    planar_configuration: string | null = null,
    lossy_flag: boolean = false,
    split: number | null = null,
    verbose_flag: boolean = false,
    warning_flag: boolean = false,
    debug_flag: boolean = false,
    error_flag: boolean = false,
    quiet_flag: boolean = false,
    jpeg_quality: number | null = null,
    lossy_error: number | null = null,
    rate: number | null = null,
    j2k_quality: number | null = null,
    tile: Array<number> | null = null,
    number_resolution: number | null = null,
    irreversible_flag: boolean = false,
    ignore_errors_flag: boolean = false,
): GdcmconvFsParameters {
    /**
     * Build parameters.
    
     * @param input_file Input DICOM filename
     * @param output_file Output DICOM filename
     * @param explicit_flag Change Transfer Syntax to explicit.
     * @param implicit_flag Change Transfer Syntax to implicit.
     * @param use_dict_flag Use dict for VR (only public by default).
     * @param with_private_dict_flag Use private dict for VR (advanced user only).
     * @param check_meta_flag Check File Meta Information (advanced user only).
     * @param root_uid Root UID.
     * @param remove_gl_flag Remove group length (deprecated in DICOM 2008).
     * @param remove_private_tags_flag Remove private tags.
     * @param remove_retired_flag Remove retired tags.
     * @param apply_lut_flag Apply LUT (non-standard, advanced user only).
     * @param photometric_interpretation Change Photometric Interpretation (when possible).
     * @param raw_flag Decompress image.
     * @param deflated_flag Compress using deflated (gzip).
     * @param jpeg_flag Compress image in jpeg.
     * @param j2k_flag Compress image in j2k.
     * @param jpegls_flag Compress image in jpeg-ls.
     * @param rle_flag Compress image in rle (lossless only).
     * @param force_flag Force decompression/merging before recompression/splitting.
     * @param generate_icon_flag Generate icon.
     * @param icon_minmax Min/Max value for icon.
     * @param icon_auto_minmax_flag Automatically compute best Min/Max values for icon.
     * @param compress_icon_flag Decide whether icon follows main Transfer Syntax or remains uncompressed.
     * @param planar_configuration Change planar configuration.
     * @param lossy_flag Use the lossy (if possible) compressor.
     * @param split Write 2D image with multiple fragments (using max size).
     * @param verbose_flag More verbose (warning+error).
     * @param warning_flag Print warning info.
     * @param debug_flag Print debug info.
     * @param error_flag Print error info.
     * @param quiet_flag Do not print to stdout.
     * @param jpeg_quality Set JPEG quality.
     * @param lossy_error Set JPEG-LS lossy error.
     * @param rate Set J2K rate.
     * @param j2k_quality Set J2K quality.
     * @param tile Set J2K tile size.
     * @param number_resolution Set number of resolution.
     * @param irreversible_flag Set irreversible.
     * @param ignore_errors_flag Convert even if file is corrupted (advanced users only, see disclaimers).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "gdcmconv.fs" as const,
        "input_file": input_file,
        "output_file": output_file,
        "explicit_flag": explicit_flag,
        "implicit_flag": implicit_flag,
        "use_dict_flag": use_dict_flag,
        "with_private_dict_flag": with_private_dict_flag,
        "check_meta_flag": check_meta_flag,
        "remove_gl_flag": remove_gl_flag,
        "remove_private_tags_flag": remove_private_tags_flag,
        "remove_retired_flag": remove_retired_flag,
        "apply_lut_flag": apply_lut_flag,
        "raw_flag": raw_flag,
        "deflated_flag": deflated_flag,
        "jpeg_flag": jpeg_flag,
        "j2k_flag": j2k_flag,
        "jpegls_flag": jpegls_flag,
        "rle_flag": rle_flag,
        "force_flag": force_flag,
        "generate_icon_flag": generate_icon_flag,
        "icon_auto_minmax_flag": icon_auto_minmax_flag,
        "compress_icon_flag": compress_icon_flag,
        "lossy_flag": lossy_flag,
        "verbose_flag": verbose_flag,
        "warning_flag": warning_flag,
        "debug_flag": debug_flag,
        "error_flag": error_flag,
        "quiet_flag": quiet_flag,
        "irreversible_flag": irreversible_flag,
        "ignore_errors_flag": ignore_errors_flag,
    };
    if (root_uid !== null) {
        params["root_uid"] = root_uid;
    }
    if (photometric_interpretation !== null) {
        params["photometric_interpretation"] = photometric_interpretation;
    }
    if (icon_minmax !== null) {
        params["icon_minmax"] = icon_minmax;
    }
    if (planar_configuration !== null) {
        params["planar_configuration"] = planar_configuration;
    }
    if (split !== null) {
        params["split"] = split;
    }
    if (jpeg_quality !== null) {
        params["jpeg_quality"] = jpeg_quality;
    }
    if (lossy_error !== null) {
        params["lossy_error"] = lossy_error;
    }
    if (rate !== null) {
        params["rate"] = rate;
    }
    if (j2k_quality !== null) {
        params["j2k_quality"] = j2k_quality;
    }
    if (tile !== null) {
        params["tile"] = tile;
    }
    if (number_resolution !== null) {
        params["number_resolution"] = number_resolution;
    }
    return params;
}


function gdcmconv_fs_cargs(
    params: GdcmconvFsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("gdcmconv.fs");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    if ((params["explicit_flag"] ?? null)) {
        cargs.push("-X");
    }
    if ((params["implicit_flag"] ?? null)) {
        cargs.push("-M");
    }
    if ((params["use_dict_flag"] ?? null)) {
        cargs.push("-U");
    }
    if ((params["with_private_dict_flag"] ?? null)) {
        cargs.push("--with-private-dict");
    }
    if ((params["check_meta_flag"] ?? null)) {
        cargs.push("-C");
    }
    if ((params["root_uid"] ?? null) !== null) {
        cargs.push(
            "--root-uid",
            (params["root_uid"] ?? null)
        );
    }
    if ((params["remove_gl_flag"] ?? null)) {
        cargs.push("--remove-gl");
    }
    if ((params["remove_private_tags_flag"] ?? null)) {
        cargs.push("--remove-private-tags");
    }
    if ((params["remove_retired_flag"] ?? null)) {
        cargs.push("--remove-retired");
    }
    if ((params["apply_lut_flag"] ?? null)) {
        cargs.push("-l");
    }
    if ((params["photometric_interpretation"] ?? null) !== null) {
        cargs.push(
            "-P",
            (params["photometric_interpretation"] ?? null)
        );
    }
    if ((params["raw_flag"] ?? null)) {
        cargs.push("-w");
    }
    if ((params["deflated_flag"] ?? null)) {
        cargs.push("-d");
    }
    if ((params["jpeg_flag"] ?? null)) {
        cargs.push("-J");
    }
    if ((params["j2k_flag"] ?? null)) {
        cargs.push("-K");
    }
    if ((params["jpegls_flag"] ?? null)) {
        cargs.push("-L");
    }
    if ((params["rle_flag"] ?? null)) {
        cargs.push("-R");
    }
    if ((params["force_flag"] ?? null)) {
        cargs.push("-F");
    }
    if ((params["generate_icon_flag"] ?? null)) {
        cargs.push("--generate-icon");
    }
    if ((params["icon_minmax"] ?? null) !== null) {
        cargs.push(
            "--icon-minmax",
            ...(params["icon_minmax"] ?? null).map(String)
        );
    }
    if ((params["icon_auto_minmax_flag"] ?? null)) {
        cargs.push("--icon-auto-minmax");
    }
    if ((params["compress_icon_flag"] ?? null)) {
        cargs.push("--compress-icon");
    }
    if ((params["planar_configuration"] ?? null) !== null) {
        cargs.push(
            "--planar-configuration",
            (params["planar_configuration"] ?? null)
        );
    }
    if ((params["lossy_flag"] ?? null)) {
        cargs.push("-Y");
    }
    if ((params["split"] ?? null) !== null) {
        cargs.push(
            "-S",
            String((params["split"] ?? null))
        );
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-V");
    }
    if ((params["warning_flag"] ?? null)) {
        cargs.push("-W");
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("-D");
    }
    if ((params["error_flag"] ?? null)) {
        cargs.push("-E");
    }
    if ((params["quiet_flag"] ?? null)) {
        cargs.push("--quiet");
    }
    if ((params["jpeg_quality"] ?? null) !== null) {
        cargs.push(
            "-q",
            String((params["jpeg_quality"] ?? null))
        );
    }
    if ((params["lossy_error"] ?? null) !== null) {
        cargs.push(
            "-e",
            String((params["lossy_error"] ?? null))
        );
    }
    if ((params["rate"] ?? null) !== null) {
        cargs.push(
            "-r",
            String((params["rate"] ?? null))
        );
    }
    if ((params["j2k_quality"] ?? null) !== null) {
        cargs.push(
            "-q",
            String((params["j2k_quality"] ?? null))
        );
    }
    if ((params["tile"] ?? null) !== null) {
        cargs.push(
            "-t",
            ...(params["tile"] ?? null).map(String)
        );
    }
    if ((params["number_resolution"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["number_resolution"] ?? null))
        );
    }
    if ((params["irreversible_flag"] ?? null)) {
        cargs.push("--irreversible");
    }
    if ((params["ignore_errors_flag"] ?? null)) {
        cargs.push("-I");
    }
    return cargs;
}


function gdcmconv_fs_outputs(
    params: GdcmconvFsParameters,
    execution: Execution,
): GdcmconvFsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: GdcmconvFsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function gdcmconv_fs_execute(
    params: GdcmconvFsParameters,
    execution: Execution,
): GdcmconvFsOutputs {
    /**
     * Convert a DICOM file into another DICOM file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `GdcmconvFsOutputs`).
     */
    params = execution.params(params)
    const cargs = gdcmconv_fs_cargs(params, execution)
    const ret = gdcmconv_fs_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function gdcmconv_fs(
    input_file: InputPathType,
    output_file: string,
    explicit_flag: boolean = false,
    implicit_flag: boolean = false,
    use_dict_flag: boolean = false,
    with_private_dict_flag: boolean = false,
    check_meta_flag: boolean = false,
    root_uid: string | null = null,
    remove_gl_flag: boolean = false,
    remove_private_tags_flag: boolean = false,
    remove_retired_flag: boolean = false,
    apply_lut_flag: boolean = false,
    photometric_interpretation: string | null = null,
    raw_flag: boolean = false,
    deflated_flag: boolean = false,
    jpeg_flag: boolean = false,
    j2k_flag: boolean = false,
    jpegls_flag: boolean = false,
    rle_flag: boolean = false,
    force_flag: boolean = false,
    generate_icon_flag: boolean = false,
    icon_minmax: Array<number> | null = null,
    icon_auto_minmax_flag: boolean = false,
    compress_icon_flag: boolean = false,
    planar_configuration: string | null = null,
    lossy_flag: boolean = false,
    split: number | null = null,
    verbose_flag: boolean = false,
    warning_flag: boolean = false,
    debug_flag: boolean = false,
    error_flag: boolean = false,
    quiet_flag: boolean = false,
    jpeg_quality: number | null = null,
    lossy_error: number | null = null,
    rate: number | null = null,
    j2k_quality: number | null = null,
    tile: Array<number> | null = null,
    number_resolution: number | null = null,
    irreversible_flag: boolean = false,
    ignore_errors_flag: boolean = false,
    runner: Runner | null = null,
): GdcmconvFsOutputs {
    /**
     * Convert a DICOM file into another DICOM file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input DICOM filename
     * @param output_file Output DICOM filename
     * @param explicit_flag Change Transfer Syntax to explicit.
     * @param implicit_flag Change Transfer Syntax to implicit.
     * @param use_dict_flag Use dict for VR (only public by default).
     * @param with_private_dict_flag Use private dict for VR (advanced user only).
     * @param check_meta_flag Check File Meta Information (advanced user only).
     * @param root_uid Root UID.
     * @param remove_gl_flag Remove group length (deprecated in DICOM 2008).
     * @param remove_private_tags_flag Remove private tags.
     * @param remove_retired_flag Remove retired tags.
     * @param apply_lut_flag Apply LUT (non-standard, advanced user only).
     * @param photometric_interpretation Change Photometric Interpretation (when possible).
     * @param raw_flag Decompress image.
     * @param deflated_flag Compress using deflated (gzip).
     * @param jpeg_flag Compress image in jpeg.
     * @param j2k_flag Compress image in j2k.
     * @param jpegls_flag Compress image in jpeg-ls.
     * @param rle_flag Compress image in rle (lossless only).
     * @param force_flag Force decompression/merging before recompression/splitting.
     * @param generate_icon_flag Generate icon.
     * @param icon_minmax Min/Max value for icon.
     * @param icon_auto_minmax_flag Automatically compute best Min/Max values for icon.
     * @param compress_icon_flag Decide whether icon follows main Transfer Syntax or remains uncompressed.
     * @param planar_configuration Change planar configuration.
     * @param lossy_flag Use the lossy (if possible) compressor.
     * @param split Write 2D image with multiple fragments (using max size).
     * @param verbose_flag More verbose (warning+error).
     * @param warning_flag Print warning info.
     * @param debug_flag Print debug info.
     * @param error_flag Print error info.
     * @param quiet_flag Do not print to stdout.
     * @param jpeg_quality Set JPEG quality.
     * @param lossy_error Set JPEG-LS lossy error.
     * @param rate Set J2K rate.
     * @param j2k_quality Set J2K quality.
     * @param tile Set J2K tile size.
     * @param number_resolution Set number of resolution.
     * @param irreversible_flag Set irreversible.
     * @param ignore_errors_flag Convert even if file is corrupted (advanced users only, see disclaimers).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `GdcmconvFsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(GDCMCONV_FS_METADATA);
    const params = gdcmconv_fs_params(input_file, output_file, explicit_flag, implicit_flag, use_dict_flag, with_private_dict_flag, check_meta_flag, root_uid, remove_gl_flag, remove_private_tags_flag, remove_retired_flag, apply_lut_flag, photometric_interpretation, raw_flag, deflated_flag, jpeg_flag, j2k_flag, jpegls_flag, rle_flag, force_flag, generate_icon_flag, icon_minmax, icon_auto_minmax_flag, compress_icon_flag, planar_configuration, lossy_flag, split, verbose_flag, warning_flag, debug_flag, error_flag, quiet_flag, jpeg_quality, lossy_error, rate, j2k_quality, tile, number_resolution, irreversible_flag, ignore_errors_flag)
    return gdcmconv_fs_execute(params, execution);
}


export {
      GDCMCONV_FS_METADATA,
      GdcmconvFsOutputs,
      GdcmconvFsParameters,
      gdcmconv_fs,
      gdcmconv_fs_params,
};
