// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_PREPARE_FIELDMAP_METADATA: Metadata = {
    id: "5c59e0c61ed0a1488f719131a2d741d2cf4930a5.boutiques",
    name: "fsl_prepare_fieldmap",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslPrepareFieldmapParameters {
    "__STYXTYPE__": "fsl_prepare_fieldmap";
    "scanner": string;
    "phase_image": InputPathType;
    "magnitude_image": InputPathType;
    "out_image": string;
    "delta_te": number;
    "nocheck_flag": boolean;
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
        "fsl_prepare_fieldmap": fsl_prepare_fieldmap_cargs,
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
        "fsl_prepare_fieldmap": fsl_prepare_fieldmap_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_prepare_fieldmap(...)`.
 *
 * @interface
 */
interface FslPrepareFieldmapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output fieldmap in rad/s format
     */
    output_fieldmap: OutputPathType;
}


function fsl_prepare_fieldmap_params(
    scanner: string,
    phase_image: InputPathType,
    magnitude_image: InputPathType,
    out_image: string,
    delta_te: number,
    nocheck_flag: boolean = false,
): FslPrepareFieldmapParameters {
    /**
     * Build parameters.
    
     * @param scanner Scanner type (must be SIEMENS)
     * @param phase_image Phase image file
     * @param magnitude_image Magnitude image file (should be Brain Extracted)
     * @param out_image Output fieldmap image file
     * @param delta_te Echo time difference of the fieldmap sequence in milliseconds
     * @param nocheck_flag Suppress automatic sanity checking of image size/range/dimensions
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_prepare_fieldmap" as const,
        "scanner": scanner,
        "phase_image": phase_image,
        "magnitude_image": magnitude_image,
        "out_image": out_image,
        "delta_te": delta_te,
        "nocheck_flag": nocheck_flag,
    };
    return params;
}


function fsl_prepare_fieldmap_cargs(
    params: FslPrepareFieldmapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_prepare_fieldmap");
    cargs.push((params["scanner"] ?? null));
    cargs.push(execution.inputFile((params["phase_image"] ?? null)));
    cargs.push(execution.inputFile((params["magnitude_image"] ?? null)));
    cargs.push((params["out_image"] ?? null));
    cargs.push(String((params["delta_te"] ?? null)));
    if ((params["nocheck_flag"] ?? null)) {
        cargs.push("--nocheck");
    }
    return cargs;
}


function fsl_prepare_fieldmap_outputs(
    params: FslPrepareFieldmapParameters,
    execution: Execution,
): FslPrepareFieldmapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslPrepareFieldmapOutputs = {
        root: execution.outputFile("."),
        output_fieldmap: execution.outputFile([(params["out_image"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function fsl_prepare_fieldmap_execute(
    params: FslPrepareFieldmapParameters,
    execution: Execution,
): FslPrepareFieldmapOutputs {
    /**
     * Prepares a fieldmap suitable for FEAT from SIEMENS data and saves output in rad/s format.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslPrepareFieldmapOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_prepare_fieldmap_cargs(params, execution)
    const ret = fsl_prepare_fieldmap_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_prepare_fieldmap(
    scanner: string,
    phase_image: InputPathType,
    magnitude_image: InputPathType,
    out_image: string,
    delta_te: number,
    nocheck_flag: boolean = false,
    runner: Runner | null = null,
): FslPrepareFieldmapOutputs {
    /**
     * Prepares a fieldmap suitable for FEAT from SIEMENS data and saves output in rad/s format.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param scanner Scanner type (must be SIEMENS)
     * @param phase_image Phase image file
     * @param magnitude_image Magnitude image file (should be Brain Extracted)
     * @param out_image Output fieldmap image file
     * @param delta_te Echo time difference of the fieldmap sequence in milliseconds
     * @param nocheck_flag Suppress automatic sanity checking of image size/range/dimensions
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslPrepareFieldmapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_PREPARE_FIELDMAP_METADATA);
    const params = fsl_prepare_fieldmap_params(scanner, phase_image, magnitude_image, out_image, delta_te, nocheck_flag)
    return fsl_prepare_fieldmap_execute(params, execution);
}


export {
      FSL_PREPARE_FIELDMAP_METADATA,
      FslPrepareFieldmapOutputs,
      FslPrepareFieldmapParameters,
      fsl_prepare_fieldmap,
      fsl_prepare_fieldmap_params,
};
