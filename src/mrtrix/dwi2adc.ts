// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DWI2ADC_METADATA: Metadata = {
    id: "61198d912b75d0ee3f4a652ba60b6429d7e5a05c.boutiques",
    name: "dwi2adc",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface Dwi2adcFslgradParameters {
    "__STYXTYPE__": "fslgrad";
    "bvecs": InputPathType;
    "bvals": InputPathType;
}


interface Dwi2adcConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface Dwi2adcParameters {
    "__STYXTYPE__": "dwi2adc";
    "grad"?: InputPathType | null | undefined;
    "fslgrad"?: Dwi2adcFslgradParameters | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<Dwi2adcConfigParameters> | null | undefined;
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
        "dwi2adc": dwi2adc_cargs,
        "fslgrad": dwi2adc_fslgrad_cargs,
        "config": dwi2adc_config_cargs,
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
        "dwi2adc": dwi2adc_outputs,
    };
    return outputsFuncs[t];
}


function dwi2adc_fslgrad_params(
    bvecs: InputPathType,
    bvals: InputPathType,
): Dwi2adcFslgradParameters {
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


function dwi2adc_fslgrad_cargs(
    params: Dwi2adcFslgradParameters,
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


function dwi2adc_config_params(
    key: string,
    value: string,
): Dwi2adcConfigParameters {
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


function dwi2adc_config_cargs(
    params: Dwi2adcConfigParameters,
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
 * Output object returned when calling `dwi2adc(...)`.
 *
 * @interface
 */
interface Dwi2adcOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output image.
     */
    output: OutputPathType;
}


function dwi2adc_params(
    input: InputPathType,
    output: string,
    grad: InputPathType | null = null,
    fslgrad: Dwi2adcFslgradParameters | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Dwi2adcConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): Dwi2adcParameters {
    /**
     * Build parameters.
    
     * @param input the input image.
     * @param output the output image.
     * @param grad Provide the diffusion-weighted gradient scheme used in the acquisition in a text file. This should be supplied as a 4xN text file with each line is in the format [ X Y Z b ], where [ X Y Z ] describe the direction of the applied gradient, and b gives the b-value in units of s/mm^2. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param fslgrad Provide the diffusion-weighted gradient scheme used in the acquisition in FSL bvecs/bvals format files. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
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
        "__STYXTYPE__": "dwi2adc" as const,
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
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function dwi2adc_cargs(
    params: Dwi2adcParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("dwi2adc");
    if ((params["grad"] ?? null) !== null) {
        cargs.push(
            "-grad",
            execution.inputFile((params["grad"] ?? null))
        );
    }
    if ((params["fslgrad"] ?? null) !== null) {
        cargs.push(...dynCargs((params["fslgrad"] ?? null).__STYXTYPE__)((params["fslgrad"] ?? null), execution));
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


function dwi2adc_outputs(
    params: Dwi2adcParameters,
    execution: Execution,
): Dwi2adcOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Dwi2adcOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function dwi2adc_execute(
    params: Dwi2adcParameters,
    execution: Execution,
): Dwi2adcOutputs {
    /**
     * Convert mean dwi (trace-weighted) images to mean ADC maps.
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
    
     * @returns NamedTuple of outputs (described in `Dwi2adcOutputs`).
     */
    params = execution.params(params)
    const cargs = dwi2adc_cargs(params, execution)
    const ret = dwi2adc_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dwi2adc(
    input: InputPathType,
    output: string,
    grad: InputPathType | null = null,
    fslgrad: Dwi2adcFslgradParameters | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Dwi2adcConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): Dwi2adcOutputs {
    /**
     * Convert mean dwi (trace-weighted) images to mean ADC maps.
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
    
     * @param input the input image.
     * @param output the output image.
     * @param grad Provide the diffusion-weighted gradient scheme used in the acquisition in a text file. This should be supplied as a 4xN text file with each line is in the format [ X Y Z b ], where [ X Y Z ] describe the direction of the applied gradient, and b gives the b-value in units of s/mm^2. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param fslgrad Provide the diffusion-weighted gradient scheme used in the acquisition in FSL bvecs/bvals format files. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Dwi2adcOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DWI2ADC_METADATA);
    const params = dwi2adc_params(input, output, grad, fslgrad, info, quiet, debug, force, nthreads, config, help, version)
    return dwi2adc_execute(params, execution);
}


export {
      DWI2ADC_METADATA,
      Dwi2adcConfigParameters,
      Dwi2adcFslgradParameters,
      Dwi2adcOutputs,
      Dwi2adcParameters,
      dwi2adc,
      dwi2adc_config_params,
      dwi2adc_fslgrad_params,
      dwi2adc_params,
};
