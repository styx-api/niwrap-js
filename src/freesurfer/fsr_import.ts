// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSR_IMPORT_METADATA: Metadata = {
    id: "8c46b9370bd04e469266a234c1fd26413c67b9bf.boutiques",
    name: "fsr-import",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FsrImportParameters {
    "__STYXTYPE__": "fsr-import";
    "outdir": string;
    "t1w_input"?: Array<InputPathType> | null | undefined;
    "t2w_input"?: Array<InputPathType> | null | undefined;
    "flair_input"?: Array<InputPathType> | null | undefined;
    "custom_mode_input"?: Array<string> | null | undefined;
    "force_update": boolean;
    "no_conform": boolean;
    "hires": boolean;
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
        "fsr-import": fsr_import_cargs,
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
        "fsr-import": fsr_import_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsr_import(...)`.
 *
 * @interface
 */
interface FsrImportOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output directory for T1-weighted images
     */
    out_t1w: OutputPathType;
    /**
     * Output directory for T2-weighted images
     */
    out_t2w: OutputPathType;
    /**
     * Output directory for FLAIR images
     */
    out_flair: OutputPathType;
    /**
     * Output directory for custom modality images based on mode
     */
    out_custom_modes: OutputPathType;
}


function fsr_import_params(
    outdir: string,
    t1w_input: Array<InputPathType> | null = null,
    t2w_input: Array<InputPathType> | null = null,
    flair_input: Array<InputPathType> | null = null,
    custom_mode_input: Array<string> | null = null,
    force_update: boolean = false,
    no_conform: boolean = false,
    hires: boolean = false,
): FsrImportParameters {
    /**
     * Build parameters.
    
     * @param outdir Root directory for output data
     * @param t1w_input Input T1-weighted image files
     * @param t2w_input Input T2-weighted image files
     * @param flair_input Input FLAIR image files
     * @param custom_mode_input Custom modality image file with specified mode name (not t1w, t2w, or flair)
     * @param force_update Update files regardless of timestamp
     * @param no_conform Do not conform inputs to 1mm, 256 dimensions
     * @param hires Same as --no-conform
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsr-import" as const,
        "outdir": outdir,
        "force_update": force_update,
        "no_conform": no_conform,
        "hires": hires,
    };
    if (t1w_input !== null) {
        params["t1w_input"] = t1w_input;
    }
    if (t2w_input !== null) {
        params["t2w_input"] = t2w_input;
    }
    if (flair_input !== null) {
        params["flair_input"] = flair_input;
    }
    if (custom_mode_input !== null) {
        params["custom_mode_input"] = custom_mode_input;
    }
    return params;
}


function fsr_import_cargs(
    params: FsrImportParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsr-import");
    cargs.push(
        "--o",
        (params["outdir"] ?? null)
    );
    if ((params["t1w_input"] ?? null) !== null) {
        cargs.push(
            "--t1w",
            ...(params["t1w_input"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["t2w_input"] ?? null) !== null) {
        cargs.push(
            "--t2w",
            ...(params["t2w_input"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["flair_input"] ?? null) !== null) {
        cargs.push(
            "--flair",
            ...(params["flair_input"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["custom_mode_input"] ?? null) !== null) {
        cargs.push(
            "--mode",
            ...(params["custom_mode_input"] ?? null)
        );
    }
    if ((params["force_update"] ?? null)) {
        cargs.push("--force-update");
    }
    if ((params["no_conform"] ?? null)) {
        cargs.push("--no-conform");
    }
    if ((params["hires"] ?? null)) {
        cargs.push("--hires");
    }
    return cargs;
}


function fsr_import_outputs(
    params: FsrImportParameters,
    execution: Execution,
): FsrImportOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FsrImportOutputs = {
        root: execution.outputFile("."),
        out_t1w: execution.outputFile([(params["outdir"] ?? null), "/t1w/*.mgz"].join('')),
        out_t2w: execution.outputFile([(params["outdir"] ?? null), "/t2w/*.mgz"].join('')),
        out_flair: execution.outputFile([(params["outdir"] ?? null), "/flair/*.mgz"].join('')),
        out_custom_modes: execution.outputFile([(params["outdir"] ?? null), "/*/*.mgz"].join('')),
    };
    return ret;
}


function fsr_import_execute(
    params: FsrImportParameters,
    execution: Execution,
): FsrImportOutputs {
    /**
     * Copies/converts data into a directory structure for samseg-expected format.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FsrImportOutputs`).
     */
    params = execution.params(params)
    const cargs = fsr_import_cargs(params, execution)
    const ret = fsr_import_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsr_import(
    outdir: string,
    t1w_input: Array<InputPathType> | null = null,
    t2w_input: Array<InputPathType> | null = null,
    flair_input: Array<InputPathType> | null = null,
    custom_mode_input: Array<string> | null = null,
    force_update: boolean = false,
    no_conform: boolean = false,
    hires: boolean = false,
    runner: Runner | null = null,
): FsrImportOutputs {
    /**
     * Copies/converts data into a directory structure for samseg-expected format.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param outdir Root directory for output data
     * @param t1w_input Input T1-weighted image files
     * @param t2w_input Input T2-weighted image files
     * @param flair_input Input FLAIR image files
     * @param custom_mode_input Custom modality image file with specified mode name (not t1w, t2w, or flair)
     * @param force_update Update files regardless of timestamp
     * @param no_conform Do not conform inputs to 1mm, 256 dimensions
     * @param hires Same as --no-conform
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FsrImportOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSR_IMPORT_METADATA);
    const params = fsr_import_params(outdir, t1w_input, t2w_input, flair_input, custom_mode_input, force_update, no_conform, hires)
    return fsr_import_execute(params, execution);
}


export {
      FSR_IMPORT_METADATA,
      FsrImportOutputs,
      FsrImportParameters,
      fsr_import,
      fsr_import_params,
};
