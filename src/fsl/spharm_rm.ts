// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SPHARM_RM_METADATA: Metadata = {
    id: "fb6c310774502ab2cd0038c0fcf5b5c2fa218245.boutiques",
    name: "spharm_rm",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface SpharmRmParameters {
    "__STYXTYPE__": "spharm_rm";
    "input_file": InputPathType;
    "output_file": string;
    "mask_file"?: InputPathType | null | undefined;
    "number_of_terms"?: number | null | undefined;
    "verbose_flag": boolean;
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
        "spharm_rm": spharm_rm_cargs,
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
        "spharm_rm": spharm_rm_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `spharm_rm(...)`.
 *
 * @interface
 */
interface SpharmRmOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image file generated by spharm_rm
     */
    outfile: OutputPathType;
}


function spharm_rm_params(
    input_file: InputPathType,
    output_file: string,
    mask_file: InputPathType | null = null,
    number_of_terms: number | null = null,
    verbose_flag: boolean = false,
): SpharmRmParameters {
    /**
     * Build parameters.
    
     * @param input_file Input image filename
     * @param output_file Output image filename
     * @param mask_file Mask filename
     * @param number_of_terms Number of terms to remove (order is 1,x,y,z,z^2+(x^2+y^2)/2,zx,zy,xy,x^2-y^2)
     * @param verbose_flag Switch on diagnostic messages
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "spharm_rm" as const,
        "input_file": input_file,
        "output_file": output_file,
        "verbose_flag": verbose_flag,
    };
    if (mask_file !== null) {
        params["mask_file"] = mask_file;
    }
    if (number_of_terms !== null) {
        params["number_of_terms"] = number_of_terms;
    }
    return params;
}


function spharm_rm_cargs(
    params: SpharmRmParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("spharm_rm");
    cargs.push(
        "--in",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "--out",
        (params["output_file"] ?? null)
    );
    if ((params["mask_file"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask_file"] ?? null))
        );
    }
    if ((params["number_of_terms"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["number_of_terms"] ?? null))
        );
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("--verbose");
    }
    return cargs;
}


function spharm_rm_outputs(
    params: SpharmRmParameters,
    execution: Execution,
): SpharmRmOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SpharmRmOutputs = {
        root: execution.outputFile("."),
        outfile: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function spharm_rm_execute(
    params: SpharmRmParameters,
    execution: Execution,
): SpharmRmOutputs {
    /**
     * Part of FSL - Spherical harmonics removal tool to process neuroimaging data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SpharmRmOutputs`).
     */
    params = execution.params(params)
    const cargs = spharm_rm_cargs(params, execution)
    const ret = spharm_rm_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function spharm_rm(
    input_file: InputPathType,
    output_file: string,
    mask_file: InputPathType | null = null,
    number_of_terms: number | null = null,
    verbose_flag: boolean = false,
    runner: Runner | null = null,
): SpharmRmOutputs {
    /**
     * Part of FSL - Spherical harmonics removal tool to process neuroimaging data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_file Input image filename
     * @param output_file Output image filename
     * @param mask_file Mask filename
     * @param number_of_terms Number of terms to remove (order is 1,x,y,z,z^2+(x^2+y^2)/2,zx,zy,xy,x^2-y^2)
     * @param verbose_flag Switch on diagnostic messages
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SpharmRmOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SPHARM_RM_METADATA);
    const params = spharm_rm_params(input_file, output_file, mask_file, number_of_terms, verbose_flag)
    return spharm_rm_execute(params, execution);
}


export {
      SPHARM_RM_METADATA,
      SpharmRmOutputs,
      SpharmRmParameters,
      spharm_rm,
      spharm_rm_params,
};
