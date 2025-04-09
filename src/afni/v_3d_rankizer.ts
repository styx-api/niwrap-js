// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_RANKIZER_METADATA: Metadata = {
    id: "d25cd53dac78c92a658be818b365fd56efd0a2bb.boutiques",
    name: "3dRankizer",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dRankizerParameters {
    "__STYXTYPE__": "3dRankizer";
    "dataset": InputPathType;
    "base_rank"?: number | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "prefix": string;
    "percentize": boolean;
    "percentize_mask": boolean;
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
        "3dRankizer": v_3d_rankizer_cargs,
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
        "3dRankizer": v_3d_rankizer_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_rankizer(...)`.
 *
 * @interface
 */
interface V3dRankizerOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output float-format dataset containing ranked voxel values
     */
    output_dataset: OutputPathType;
}


function v_3d_rankizer_params(
    dataset: InputPathType,
    prefix: string,
    base_rank: number | null = null,
    mask: InputPathType | null = null,
    percentize: boolean = false,
    percentize_mask: boolean = false,
): V3dRankizerParameters {
    /**
     * Build parameters.
    
     * @param dataset Input MRI dataset
     * @param prefix Write results into float-format output dataset
     * @param base_rank Set the 'base' rank instead of 1
     * @param mask Use the specified dataset as a mask. Only voxels with nonzero values in this mask will be used from the input dataset. Voxels outside the mask will get rank 0.
     * @param percentize Divide rank by the number of voxels in the dataset and multiply by 100.0
     * @param percentize_mask Divide rank by the number of voxels in the mask and multiply by 100.0
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dRankizer" as const,
        "dataset": dataset,
        "prefix": prefix,
        "percentize": percentize,
        "percentize_mask": percentize_mask,
    };
    if (base_rank !== null) {
        params["base_rank"] = base_rank;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    return params;
}


function v_3d_rankizer_cargs(
    params: V3dRankizerParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dRankizer");
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    if ((params["base_rank"] ?? null) !== null) {
        cargs.push(
            "-brank",
            String((params["base_rank"] ?? null))
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["percentize"] ?? null)) {
        cargs.push("-percentize");
    }
    if ((params["percentize_mask"] ?? null)) {
        cargs.push("-percentize_mask");
    }
    return cargs;
}


function v_3d_rankizer_outputs(
    params: V3dRankizerParameters,
    execution: Execution,
): V3dRankizerOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dRankizerOutputs = {
        root: execution.outputFile("."),
        output_dataset: execution.outputFile([(params["prefix"] ?? null), "+tlrc.HEAD"].join('')),
    };
    return ret;
}


function v_3d_rankizer_execute(
    params: V3dRankizerParameters,
    execution: Execution,
): V3dRankizerOutputs {
    /**
     * Tool to rank each voxel as sorted into increasing value. Ties get the average rank.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dRankizerOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_rankizer_cargs(params, execution)
    const ret = v_3d_rankizer_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_rankizer(
    dataset: InputPathType,
    prefix: string,
    base_rank: number | null = null,
    mask: InputPathType | null = null,
    percentize: boolean = false,
    percentize_mask: boolean = false,
    runner: Runner | null = null,
): V3dRankizerOutputs {
    /**
     * Tool to rank each voxel as sorted into increasing value. Ties get the average rank.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset Input MRI dataset
     * @param prefix Write results into float-format output dataset
     * @param base_rank Set the 'base' rank instead of 1
     * @param mask Use the specified dataset as a mask. Only voxels with nonzero values in this mask will be used from the input dataset. Voxels outside the mask will get rank 0.
     * @param percentize Divide rank by the number of voxels in the dataset and multiply by 100.0
     * @param percentize_mask Divide rank by the number of voxels in the mask and multiply by 100.0
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dRankizerOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_RANKIZER_METADATA);
    const params = v_3d_rankizer_params(dataset, prefix, base_rank, mask, percentize, percentize_mask)
    return v_3d_rankizer_execute(params, execution);
}


export {
      V3dRankizerOutputs,
      V3dRankizerParameters,
      V_3D_RANKIZER_METADATA,
      v_3d_rankizer,
      v_3d_rankizer_params,
};
