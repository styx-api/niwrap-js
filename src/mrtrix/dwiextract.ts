// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DWIEXTRACT_METADATA: Metadata = {
    id: "5b00b542225211d60f5d1b333fb8c27f5a4730f1.boutiques",
    name: "dwiextract",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface DwiextractFslgradParameters {
    "__STYXTYPE__": "fslgrad";
    "bvecs": InputPathType;
    "bvals": InputPathType;
}


interface DwiextractExportGradFslParameters {
    "__STYXTYPE__": "export_grad_fsl";
    "bvecs_path": string;
    "bvals_path": string;
}


interface DwiextractImportPeEddyParameters {
    "__STYXTYPE__": "import_pe_eddy";
    "config": InputPathType;
    "indices": InputPathType;
}


interface DwiextractVariousStringParameters {
    "__STYXTYPE__": "VariousString";
    "obj": string;
}


interface DwiextractVariousFileParameters {
    "__STYXTYPE__": "VariousFile";
    "obj": InputPathType;
}


interface DwiextractConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface DwiextractParameters {
    "__STYXTYPE__": "dwiextract";
    "bzero": boolean;
    "no_bzero": boolean;
    "singleshell": boolean;
    "grad"?: InputPathType | null | undefined;
    "fslgrad"?: DwiextractFslgradParameters | null | undefined;
    "shells"?: Array<number> | null | undefined;
    "export_grad_mrtrix"?: string | null | undefined;
    "export_grad_fsl"?: DwiextractExportGradFslParameters | null | undefined;
    "import_pe_table"?: InputPathType | null | undefined;
    "import_pe_eddy"?: DwiextractImportPeEddyParameters | null | undefined;
    "pe"?: Array<number> | null | undefined;
    "strides"?: DwiextractVariousStringParameters | DwiextractVariousFileParameters | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<DwiextractConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "input": InputPathType;
    "output": string;
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
        "dwiextract": dwiextract_cargs,
        "fslgrad": dwiextract_fslgrad_cargs,
        "export_grad_fsl": dwiextract_export_grad_fsl_cargs,
        "import_pe_eddy": dwiextract_import_pe_eddy_cargs,
        "VariousString": dwiextract_various_string_cargs,
        "VariousFile": dwiextract_various_file_cargs,
        "config": dwiextract_config_cargs,
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
        "dwiextract": dwiextract_outputs,
        "export_grad_fsl": dwiextract_export_grad_fsl_outputs,
    };
    return outputsFuncs[t];
}


function dwiextract_fslgrad_params(
    bvecs: InputPathType,
    bvals: InputPathType,
): DwiextractFslgradParameters {
    /**
     * Build parameters.
    
     * @param bvecs Provide the diffusion-weighted gradient scheme used in the acquisition in FSL bvecs/bvals format files. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param bvals Provide the diffusion-weighted gradient scheme used in the acquisition in FSL bvecs/bvals format files. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslgrad" as const,
        "bvecs": bvecs,
        "bvals": bvals,
    };
    return params;
}


function dwiextract_fslgrad_cargs(
    params: DwiextractFslgradParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-fslgrad");
    cargs.push(execution.inputFile((params["bvecs"] ?? null)));
    cargs.push(execution.inputFile((params["bvals"] ?? null)));
    return cargs;
}


/**
 * Output object returned when calling `DwiextractExportGradFslParameters | null(...)`.
 *
 * @interface
 */
interface DwiextractExportGradFslOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * export the diffusion-weighted gradient table to files in FSL (bvecs / bvals) format
     */
    bvecs_path: OutputPathType;
    /**
     * export the diffusion-weighted gradient table to files in FSL (bvecs / bvals) format
     */
    bvals_path: OutputPathType;
}


function dwiextract_export_grad_fsl_params(
    bvecs_path: string,
    bvals_path: string,
): DwiextractExportGradFslParameters {
    /**
     * Build parameters.
    
     * @param bvecs_path export the diffusion-weighted gradient table to files in FSL (bvecs / bvals) format
     * @param bvals_path export the diffusion-weighted gradient table to files in FSL (bvecs / bvals) format
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "export_grad_fsl" as const,
        "bvecs_path": bvecs_path,
        "bvals_path": bvals_path,
    };
    return params;
}


function dwiextract_export_grad_fsl_cargs(
    params: DwiextractExportGradFslParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-export_grad_fsl");
    cargs.push((params["bvecs_path"] ?? null));
    cargs.push((params["bvals_path"] ?? null));
    return cargs;
}


function dwiextract_export_grad_fsl_outputs(
    params: DwiextractExportGradFslParameters,
    execution: Execution,
): DwiextractExportGradFslOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DwiextractExportGradFslOutputs = {
        root: execution.outputFile("."),
        bvecs_path: execution.outputFile([(params["bvecs_path"] ?? null)].join('')),
        bvals_path: execution.outputFile([(params["bvals_path"] ?? null)].join('')),
    };
    return ret;
}


function dwiextract_import_pe_eddy_params(
    config: InputPathType,
    indices: InputPathType,
): DwiextractImportPeEddyParameters {
    /**
     * Build parameters.
    
     * @param config import phase-encoding information from an EDDY-style config / index file pair
     * @param indices import phase-encoding information from an EDDY-style config / index file pair
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "import_pe_eddy" as const,
        "config": config,
        "indices": indices,
    };
    return params;
}


function dwiextract_import_pe_eddy_cargs(
    params: DwiextractImportPeEddyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-import_pe_eddy");
    cargs.push(execution.inputFile((params["config"] ?? null)));
    cargs.push(execution.inputFile((params["indices"] ?? null)));
    return cargs;
}


function dwiextract_various_string_params(
    obj: string,
): DwiextractVariousStringParameters {
    /**
     * Build parameters.
    
     * @param obj String object.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "VariousString" as const,
        "obj": obj,
    };
    return params;
}


function dwiextract_various_string_cargs(
    params: DwiextractVariousStringParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push((params["obj"] ?? null));
    return cargs;
}


function dwiextract_various_file_params(
    obj: InputPathType,
): DwiextractVariousFileParameters {
    /**
     * Build parameters.
    
     * @param obj File object.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "VariousFile" as const,
        "obj": obj,
    };
    return params;
}


function dwiextract_various_file_cargs(
    params: DwiextractVariousFileParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push(execution.inputFile((params["obj"] ?? null)));
    return cargs;
}


function dwiextract_config_params(
    key: string,
    value: string,
): DwiextractConfigParameters {
    /**
     * Build parameters.
    
     * @param key temporarily set the value of an MRtrix config file entry.
     * @param value temporarily set the value of an MRtrix config file entry.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "config" as const,
        "key": key,
        "value": value,
    };
    return params;
}


function dwiextract_config_cargs(
    params: DwiextractConfigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-config");
    cargs.push((params["key"] ?? null));
    cargs.push((params["value"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `dwiextract(...)`.
 *
 * @interface
 */
interface DwiextractOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output image (diffusion-weighted volumes by default).
     */
    output: OutputPathType;
    /**
     * export the diffusion-weighted gradient table to file in MRtrix format 
     */
    export_grad_mrtrix: OutputPathType | null;
    /**
     * Outputs from `dwiextract_export_grad_fsl_outputs`.
     */
    export_grad_fsl: DwiextractExportGradFslOutputs | null;
}


function dwiextract_params(
    input: InputPathType,
    output: string,
    bzero: boolean = false,
    no_bzero: boolean = false,
    singleshell: boolean = false,
    grad: InputPathType | null = null,
    fslgrad: DwiextractFslgradParameters | null = null,
    shells: Array<number> | null = null,
    export_grad_mrtrix: string | null = null,
    export_grad_fsl: DwiextractExportGradFslParameters | null = null,
    import_pe_table: InputPathType | null = null,
    import_pe_eddy: DwiextractImportPeEddyParameters | null = null,
    pe: Array<number> | null = null,
    strides: DwiextractVariousStringParameters | DwiextractVariousFileParameters | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<DwiextractConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): DwiextractParameters {
    /**
     * Build parameters.
    
     * @param input the input DW image.
     * @param output the output image (diffusion-weighted volumes by default).
     * @param bzero Output b=0 volumes (instead of the diffusion weighted volumes, if -singleshell is not specified).
     * @param no_bzero Output only non b=0 volumes (default, if -singleshell is not specified).
     * @param singleshell Force a single-shell (single non b=0 shell) output. This will include b=0 volumes, if present. Use with -bzero to enforce presence of b=0 volumes (error if not present) or with -no_bzero to exclude them.
     * @param grad Provide the diffusion-weighted gradient scheme used in the acquisition in a text file. This should be supplied as a 4xN text file with each line is in the format [ X Y Z b ], where [ X Y Z ] describe the direction of the applied gradient, and b gives the b-value in units of s/mm^2. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param fslgrad Provide the diffusion-weighted gradient scheme used in the acquisition in FSL bvecs/bvals format files. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param shells specify one or more b-values to use during processing, as a comma-separated list of the desired approximate b-values (b-values are clustered to allow for small deviations). Note that some commands are incompatible with multiple b-values, and will report an error if more than one b-value is provided. 
WARNING: note that, even though the b=0 volumes are never referred to as shells in the literature, they still have to be explicitly included in the list of b-values as provided to the -shell option! Several algorithms which include the b=0 volumes in their computations may otherwise return an undesired result.
     * @param export_grad_mrtrix export the diffusion-weighted gradient table to file in MRtrix format
     * @param export_grad_fsl export the diffusion-weighted gradient table to files in FSL (bvecs / bvals) format
     * @param import_pe_table import a phase-encoding table from file
     * @param import_pe_eddy import phase-encoding information from an EDDY-style config / index file pair
     * @param pe select volumes with a particular phase encoding; this can be three comma-separated values (for i,j,k components of vector direction) or four (direction & total readout time)
     * @param strides specify the strides of the output data in memory; either as a comma-separated list of (signed) integers, or as a template image from which the strides shall be extracted and used. The actual strides produced will depend on whether the output image format can support it.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "dwiextract" as const,
        "bzero": bzero,
        "no_bzero": no_bzero,
        "singleshell": singleshell,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "input": input,
        "output": output,
    };
    if (grad !== null) {
        params["grad"] = grad;
    }
    if (fslgrad !== null) {
        params["fslgrad"] = fslgrad;
    }
    if (shells !== null) {
        params["shells"] = shells;
    }
    if (export_grad_mrtrix !== null) {
        params["export_grad_mrtrix"] = export_grad_mrtrix;
    }
    if (export_grad_fsl !== null) {
        params["export_grad_fsl"] = export_grad_fsl;
    }
    if (import_pe_table !== null) {
        params["import_pe_table"] = import_pe_table;
    }
    if (import_pe_eddy !== null) {
        params["import_pe_eddy"] = import_pe_eddy;
    }
    if (pe !== null) {
        params["pe"] = pe;
    }
    if (strides !== null) {
        params["strides"] = strides;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function dwiextract_cargs(
    params: DwiextractParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("dwiextract");
    if ((params["bzero"] ?? null)) {
        cargs.push("-bzero");
    }
    if ((params["no_bzero"] ?? null)) {
        cargs.push("-no_bzero");
    }
    if ((params["singleshell"] ?? null)) {
        cargs.push("-singleshell");
    }
    if ((params["grad"] ?? null) !== null) {
        cargs.push(
            "-grad",
            execution.inputFile((params["grad"] ?? null))
        );
    }
    if ((params["fslgrad"] ?? null) !== null) {
        cargs.push(...dynCargs((params["fslgrad"] ?? null).__STYXTYPE__)((params["fslgrad"] ?? null), execution));
    }
    if ((params["shells"] ?? null) !== null) {
        cargs.push(
            "-shells",
            (params["shells"] ?? null).map(String).join(",")
        );
    }
    if ((params["export_grad_mrtrix"] ?? null) !== null) {
        cargs.push(
            "-export_grad_mrtrix",
            (params["export_grad_mrtrix"] ?? null)
        );
    }
    if ((params["export_grad_fsl"] ?? null) !== null) {
        cargs.push(...dynCargs((params["export_grad_fsl"] ?? null).__STYXTYPE__)((params["export_grad_fsl"] ?? null), execution));
    }
    if ((params["import_pe_table"] ?? null) !== null) {
        cargs.push(
            "-import_pe_table",
            execution.inputFile((params["import_pe_table"] ?? null))
        );
    }
    if ((params["import_pe_eddy"] ?? null) !== null) {
        cargs.push(...dynCargs((params["import_pe_eddy"] ?? null).__STYXTYPE__)((params["import_pe_eddy"] ?? null), execution));
    }
    if ((params["pe"] ?? null) !== null) {
        cargs.push(
            "-pe",
            (params["pe"] ?? null).map(String).join(",")
        );
    }
    if ((params["strides"] ?? null) !== null) {
        cargs.push(
            "-strides",
            ...dynCargs((params["strides"] ?? null).__STYXTYPE__)((params["strides"] ?? null), execution)
        );
    }
    if ((params["info"] ?? null)) {
        cargs.push("-info");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "-nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(execution.inputFile((params["input"] ?? null)));
    cargs.push((params["output"] ?? null));
    return cargs;
}


function dwiextract_outputs(
    params: DwiextractParameters,
    execution: Execution,
): DwiextractOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DwiextractOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
        export_grad_mrtrix: ((params["export_grad_mrtrix"] ?? null) !== null) ? execution.outputFile([(params["export_grad_mrtrix"] ?? null)].join('')) : null,
        export_grad_fsl: (dynOutputs((params["export_grad_fsl"] ?? null).__STYXTYPE__)?.((params["export_grad_fsl"] ?? null), execution) ?? null),
    };
    return ret;
}


function dwiextract_execute(
    params: DwiextractParameters,
    execution: Execution,
): DwiextractOutputs {
    /**
     * Extract diffusion-weighted volumes, b=0 volumes, or certain shells from a DWI dataset.
     * 
     * 
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DwiextractOutputs`).
     */
    params = execution.params(params)
    const cargs = dwiextract_cargs(params, execution)
    const ret = dwiextract_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dwiextract(
    input: InputPathType,
    output: string,
    bzero: boolean = false,
    no_bzero: boolean = false,
    singleshell: boolean = false,
    grad: InputPathType | null = null,
    fslgrad: DwiextractFslgradParameters | null = null,
    shells: Array<number> | null = null,
    export_grad_mrtrix: string | null = null,
    export_grad_fsl: DwiextractExportGradFslParameters | null = null,
    import_pe_table: InputPathType | null = null,
    import_pe_eddy: DwiextractImportPeEddyParameters | null = null,
    pe: Array<number> | null = null,
    strides: DwiextractVariousStringParameters | DwiextractVariousFileParameters | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<DwiextractConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): DwiextractOutputs {
    /**
     * Extract diffusion-weighted volumes, b=0 volumes, or certain shells from a DWI dataset.
     * 
     * 
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param input the input DW image.
     * @param output the output image (diffusion-weighted volumes by default).
     * @param bzero Output b=0 volumes (instead of the diffusion weighted volumes, if -singleshell is not specified).
     * @param no_bzero Output only non b=0 volumes (default, if -singleshell is not specified).
     * @param singleshell Force a single-shell (single non b=0 shell) output. This will include b=0 volumes, if present. Use with -bzero to enforce presence of b=0 volumes (error if not present) or with -no_bzero to exclude them.
     * @param grad Provide the diffusion-weighted gradient scheme used in the acquisition in a text file. This should be supplied as a 4xN text file with each line is in the format [ X Y Z b ], where [ X Y Z ] describe the direction of the applied gradient, and b gives the b-value in units of s/mm^2. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param fslgrad Provide the diffusion-weighted gradient scheme used in the acquisition in FSL bvecs/bvals format files. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param shells specify one or more b-values to use during processing, as a comma-separated list of the desired approximate b-values (b-values are clustered to allow for small deviations). Note that some commands are incompatible with multiple b-values, and will report an error if more than one b-value is provided. 
WARNING: note that, even though the b=0 volumes are never referred to as shells in the literature, they still have to be explicitly included in the list of b-values as provided to the -shell option! Several algorithms which include the b=0 volumes in their computations may otherwise return an undesired result.
     * @param export_grad_mrtrix export the diffusion-weighted gradient table to file in MRtrix format
     * @param export_grad_fsl export the diffusion-weighted gradient table to files in FSL (bvecs / bvals) format
     * @param import_pe_table import a phase-encoding table from file
     * @param import_pe_eddy import phase-encoding information from an EDDY-style config / index file pair
     * @param pe select volumes with a particular phase encoding; this can be three comma-separated values (for i,j,k components of vector direction) or four (direction & total readout time)
     * @param strides specify the strides of the output data in memory; either as a comma-separated list of (signed) integers, or as a template image from which the strides shall be extracted and used. The actual strides produced will depend on whether the output image format can support it.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DwiextractOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DWIEXTRACT_METADATA);
    const params = dwiextract_params(input, output, bzero, no_bzero, singleshell, grad, fslgrad, shells, export_grad_mrtrix, export_grad_fsl, import_pe_table, import_pe_eddy, pe, strides, info, quiet, debug, force, nthreads, config, help, version)
    return dwiextract_execute(params, execution);
}


export {
      DWIEXTRACT_METADATA,
      DwiextractConfigParameters,
      DwiextractExportGradFslOutputs,
      DwiextractExportGradFslParameters,
      DwiextractFslgradParameters,
      DwiextractImportPeEddyParameters,
      DwiextractOutputs,
      DwiextractParameters,
      DwiextractVariousFileParameters,
      DwiextractVariousStringParameters,
      dwiextract,
      dwiextract_config_params,
      dwiextract_export_grad_fsl_params,
      dwiextract_fslgrad_params,
      dwiextract_import_pe_eddy_params,
      dwiextract_params,
      dwiextract_various_file_params,
      dwiextract_various_string_params,
};
