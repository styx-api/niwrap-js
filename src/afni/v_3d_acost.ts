// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_ACOST_METADATA: Metadata = {
    id: "3b13cb783a9f1117e8f3b02cc3c2980e9a683a89.boutiques",
    name: "3dAcost",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dAcostParameters {
    "__STYXTYPE__": "3dAcost";
    "infile": InputPathType;
    "basefile": InputPathType;
    "outfile": string;
    "all_cost": boolean;
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
        "3dAcost": v_3d_acost_cargs,
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
        "3dAcost": v_3d_acost_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_acost(...)`.
 *
 * @interface
 */
interface V3dAcostOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output aligned dataset (HEAD file)
     */
    output_head: OutputPathType;
    /**
     * Output aligned dataset (BRIK file)
     */
    output_brik: OutputPathType;
}


function v_3d_acost_params(
    infile: InputPathType,
    basefile: InputPathType,
    outfile: string,
    all_cost: boolean = false,
): V3dAcostParameters {
    /**
     * Build parameters.
    
     * @param infile Input dataset for allineation
     * @param basefile Base dataset for allineation
     * @param outfile Prefix for the output dataset
     * @param all_cost Prints all alignment cost metrics
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dAcost" as const,
        "infile": infile,
        "basefile": basefile,
        "outfile": outfile,
        "all_cost": all_cost,
    };
    return params;
}


function v_3d_acost_cargs(
    params: V3dAcostParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dAcost");
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    cargs.push(
        "-base",
        execution.inputFile((params["basefile"] ?? null))
    );
    cargs.push(
        "-prefix",
        (params["outfile"] ?? null)
    );
    if ((params["all_cost"] ?? null)) {
        cargs.push("-allcostX");
    }
    return cargs;
}


function v_3d_acost_outputs(
    params: V3dAcostParameters,
    execution: Execution,
): V3dAcostOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dAcostOutputs = {
        root: execution.outputFile("."),
        output_head: execution.outputFile([(params["outfile"] ?? null), "+orig.HEAD"].join('')),
        output_brik: execution.outputFile([(params["outfile"] ?? null), "+orig.BRIK"].join('')),
    };
    return ret;
}


function v_3d_acost_execute(
    params: V3dAcostParameters,
    execution: Execution,
): V3dAcostOutputs {
    /**
     * Allineate dataset to a base dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dAcostOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_acost_cargs(params, execution)
    const ret = v_3d_acost_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_acost(
    infile: InputPathType,
    basefile: InputPathType,
    outfile: string,
    all_cost: boolean = false,
    runner: Runner | null = null,
): V3dAcostOutputs {
    /**
     * Allineate dataset to a base dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param infile Input dataset for allineation
     * @param basefile Base dataset for allineation
     * @param outfile Prefix for the output dataset
     * @param all_cost Prints all alignment cost metrics
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dAcostOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_ACOST_METADATA);
    const params = v_3d_acost_params(infile, basefile, outfile, all_cost)
    return v_3d_acost_execute(params, execution);
}


export {
      V3dAcostOutputs,
      V3dAcostParameters,
      V_3D_ACOST_METADATA,
      v_3d_acost,
      v_3d_acost_params,
};
